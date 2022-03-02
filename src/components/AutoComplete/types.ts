import { Dispatch, SetStateAction } from 'react';

export interface Props {
  width?: number | string;
  setAutoCompleteInput: Dispatch<SetStateAction<string>>;
  autoCompleteInput: string;
  wordList: TypeWordList;
  setWordList: Dispatch<SetStateAction<TypeWordList>>;
  handleSubmit: (word: string) => void;
}
export type TypeWordList = { id: number; name: string }[];
export type TypeDropdownList = { id: number; name: string; isSelected: boolean }[];
