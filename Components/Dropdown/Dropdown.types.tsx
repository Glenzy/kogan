import { SetStateAction } from "react";
import { CubicWeightResult } from "./pages";

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void;
  clear: () => SetStateAction<CubicWeightResult>;
}