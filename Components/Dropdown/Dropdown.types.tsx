import { Items } from 'pages/index';

export interface DropdownProps {
  options: string[];
  onChange: (selectedItem: string) => void; // this is for later
}