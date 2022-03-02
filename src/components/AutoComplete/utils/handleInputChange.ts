import { Dispatch, SetStateAction } from 'react';
import { search } from '../../../redux/search';
import { TypeDropdownList, TypeWordList } from '../types';
import { createDropdownListAndSetDropDownOpen } from './createDropdownListAndSetDropDownOpen';
import { searchApi } from './searchApi';

export const handleInputChange = async (
  value: string,
  setShowDropdown: Dispatch<SetStateAction<boolean>>,
  setDropdownList: Dispatch<SetStateAction<TypeDropdownList>>,
  searchStore: {
    name: string | null;
    wordList: TypeWordList | null;
    minute: number | null;
  }[],
  setWordList: Dispatch<SetStateAction<TypeWordList>>,
  dispatch: Dispatch<any>,
) => {
  if (!value.length) {
    setShowDropdown(false);
    return setDropdownList([]);
  }

  const storedData = searchStore.find(({ name }) => name === value);
  if (storedData) {
    const { wordList: storedWordList, minute } = storedData;
    const nowMin = new Date().getMinutes();

    if (Math.abs(nowMin - (minute as number)) <= 5) {
      setWordList(storedWordList as TypeWordList);
      createDropdownListAndSetDropDownOpen(
        storedWordList as TypeWordList,
        value,
        setDropdownList,
        setShowDropdown,
      );
      return;
    }
    dispatch(search.actions.remove(value));
  }
  const newWordList = await searchApi(value);

  setWordList(newWordList);
  createDropdownListAndSetDropDownOpen(newWordList, value, setDropdownList, setShowDropdown);
  dispatch(search.actions.set(value, newWordList));
};
