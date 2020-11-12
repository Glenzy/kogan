import { SyntheticEvent } from "react";
import { Callback } from "downshift";

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void;
  clear: (event: SyntheticEvent<any, Event>) => Callback;
}