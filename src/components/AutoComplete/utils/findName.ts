import { TypeDropdownList } from '../types';

export const findName = (dropdownList: TypeDropdownList, inputValue: string): [number, string] => {
  const idx = dropdownList.findIndex(({ isSelected }) => isSelected === true);
  const name = idx === -1 ? inputValue : dropdownList[idx].name;
  return [idx, name];
};
