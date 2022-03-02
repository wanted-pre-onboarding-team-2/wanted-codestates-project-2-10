import { TypeDropdownList } from '../types';

export const findNextWordIdx = (
  keyboardEvent: 'ArrowDown' | 'ArrowUp',
  curDropdownIdx: number,
  dropdownList: TypeDropdownList,
) => {
  if (keyboardEvent === 'ArrowDown') {
    return curDropdownIdx === -1 || curDropdownIdx === dropdownList.length - 1
      ? 0
      : curDropdownIdx + 1;
  }
  return curDropdownIdx === -1 || curDropdownIdx === 0
    ? dropdownList.length - 1
    : curDropdownIdx - 1;
};
