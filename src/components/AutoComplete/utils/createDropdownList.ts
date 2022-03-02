import { TypeDropdownList, TypeWordList } from '../types';

export const createDropdownList = (
  wordList: TypeWordList,
  inputValue: string,
  sliceNum?: number,
): TypeDropdownList => {
  const dropdownList = wordList
    .filter(({ name }) => name.includes(inputValue))
    .map((word) => ({ ...word, isSelected: false }));

  return sliceNum ? dropdownList.slice(0, sliceNum) : dropdownList;
};
