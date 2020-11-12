import { SyntheticEvent } from "react";

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void;
  clear: (event: SyntheticEvent<any, Event>) => any;
}