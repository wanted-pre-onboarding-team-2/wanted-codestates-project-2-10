import { TypeDropdownList } from '../types';

export const changeDropdownListColor = (dropdownList: TypeDropdownList, nextWordIdx: number) =>
  dropdownList.map((data, index) =>
    index === nextWordIdx ? { ...data, isSelected: true } : { ...data, isSelected: false },
  );
