import { SetStateAction, SyntheticEvent } from "react";
import { CubicWeightResult } from "pages";
import { Callback } from "downshift";

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void;
  clear: (event: SyntheticEvent<any, Event>) => Callback;
}