import { SetStateAction, SyntheticEvent } from "react";
import { CubicWeightResult } from "pages";

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void;
  clear: (event: SyntheticEvent<any, Event>) => SetStateAction<CubicWeightResult>;
}