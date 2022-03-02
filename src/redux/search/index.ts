import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeWordList } from '../../components/AutoComplete/types';
import { TypeSearch } from './type';

export const search = createSlice({
  name: 'posts',
  initialState: {
    data: [{ name: null, wordList: null, minute: null }],
  } as TypeSearch,
  reducers: {
    set: {
      reducer: (
        state: TypeSearch,
        action: PayloadAction<{ name: string; wordList: TypeWordList; minute: number }>,
      ) => {
        state.data.push(action.payload);
      },
      prepare: (name: string, wordList: TypeWordList) => {
        const minute = new Date().getMinutes();
        return { payload: { name, wordList, minute } };
      },
    },
    remove: {
      reducer: (state: TypeSearch, action: PayloadAction<{ name: string }>) => {
        state.data = state.data.filter(({ name }) => name !== action.payload.name);
      },
      prepare: (name: string) => ({ payload: { name } }),
    },
  },
});
