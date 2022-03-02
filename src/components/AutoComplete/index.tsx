import { ChangeEvent, KeyboardEvent, MutableRefObject, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Btn, Input, InputWrapper, Li, Text, Ul, Wrapper } from './style';
import { Props, TypeDropdownList } from './types';
import { RootState } from '../../redux';
import Magnifier from '../Magnifier';
import { useClickAway } from '../../hooks/useClickAway';
import {
  changeDropdownListColor,
  findName,
  findNextWordIdx,
  handleInputChange,
  useUpdateAutoComplete,
} from './utils';

const AutoComplete = ({
  width = 300,
  setAutoCompleteInput,
  setWordList,
  autoCompleteInput,
  wordList,
  handleSubmit,
  ...props
}: Props) => {
  const [dropdownList, setDropdownList] = useState<TypeDropdownList>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const ulRef = useClickAway(() => {
    showDropdown && setShowDropdown(false);
  }, [showDropdown]);
  const timeoutId = useRef(0);
  const dispatch = useDispatch();
  const { data: searchStore } = useSelector((store: RootState) => store.search);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAutoCompleteInput(value);

    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => {
      handleInputChange(
        value,
        setShowDropdown,
        setDropdownList,
        searchStore,
        setWordList,
        dispatch,
      );
    }, 500);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = (e.target as HTMLInputElement).value;

    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;
    if (!inputValue) return;
    if (!dropdownList.length && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) return;
    if (inputValue && !dropdownList.length) return;
    const [idx, name] = findName(dropdownList, inputValue);

    if (e.key === 'Enter') {
      useUpdateAutoComplete(
        name,
        wordList,
        setShowDropdown,
        setAutoCompleteInput,
        setDropdownList,
        handleSubmit,
      );
      return;
    }

    const nextWordIdx = findNextWordIdx(e.key, idx, dropdownList);
    setAutoCompleteInput(dropdownList[nextWordIdx].name);
    setDropdownList((prevDropdownList) => changeDropdownListColor(prevDropdownList, nextWordIdx));
  };

  const handleLiClick = (name: string) => {
    useUpdateAutoComplete(
      name,
      wordList,
      setShowDropdown,
      setAutoCompleteInput,
      setDropdownList,
      handleSubmit,
    );
    setAutoCompleteInput(name);
    return;
  };
  const handleInputClick = () => {
    if (!dropdownList.length) return;
    setShowDropdown(true);
  };
  return (
    <Wrapper width={width} {...props}>
      <InputWrapper>
        <Magnifier />
        <Input
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onClick={handleInputClick}
          value={autoCompleteInput}
        />
        <Btn>검색</Btn>
      </InputWrapper>

      {showDropdown && (
        <Ul ref={ulRef as MutableRefObject<HTMLUListElement>}>
          <Text>{dropdownList.length ? '추천 검색어' : '검색어 없음'}</Text>
          {dropdownList.map(({ id, name, isSelected }) => (
            <Li key={id} isSelected={isSelected} onClick={() => handleLiClick(name)}>
              <Magnifier /> {name}
            </Li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
};
export default AutoComplete;
