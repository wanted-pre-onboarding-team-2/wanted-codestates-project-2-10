import { Dispatch, SetStateAction } from 'react';
import { TypeDropdownList, TypeWordList } from '../types';
import { createDropdownList } from './createDropdownList';

export const useUpdateAutoComplete = (
  word: string,
  wordList: TypeWordList,
  setShowDropdown: Dispatch<SetStateAction<boolean>>,
  setAutoCompleteInput: Dispatch<SetStateAction<string>>,
  setDropdownList: Dispatch<SetStateAction<TypeDropdownList>>,
  handleSubmit: (word: string) => void,
) => {
  setShowDropdown(false);
  setAutoCompleteInput(word);
  const newDropdownList = createDropdownList(wordList, word, 7);

  setDropdownList(newDropdownList);
  handleSubmit(word);
};
