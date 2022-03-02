import { TypeWordList } from '../../components/AutoComplete/types';

export interface TypeSearch {
  data: { name: null | string; wordList: null | TypeWordList; minute: null | number }[];
}
