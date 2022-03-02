import { Dispatch, SetStateAction } from 'react';
import { TypeDropdownList, TypeWordList } from '../types';
import { createDropdownList } from './createDropdownList';

export const createDropdownListAndSetDropDownOpen = (
  wordList: TypeWordList,
  inputValue: string,
  setDropdownList: Dispatch<SetStateAction<TypeDropdownList>>,
  setShowDropdown: Dispatch<SetStateAction<boolean>>,
) => {
  const dropdownList = createDropdownList(wordList, inputValue, 7);
  setDropdownList(dropdownList);
  setShowDropdown(true);
};
