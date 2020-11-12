import { FC } from 'react';
import Downshift from 'downshift'
import { Form, Input, SelectList, SelectListItem, InputContainer, Button } from './Dropdown.styles';
import { DropdownProps } from './Dropdown.types';


const Dropdown: FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <Downshift
      onChange={(selection) =>
        onChange(selection ? selection : '')
      }
      itemToString={item => (item ? item : "")}
    >
      {({
        getInputProps,
        getMenuProps,
        getRootProps,
        getItemProps,
        openMenu,
        isOpen,
        highlightedIndex,
        inputValue,
        clearSelection
      }) => (
          <Form {...getRootProps()}>
            <InputContainer>
              <Input {...getInputProps({ onFocus: () => openMenu() }) as any} isActive={isOpen} />
              <Button onClick={() => clearSelection()}>x</Button>
            </InputContainer>
            <SelectList {...getMenuProps()} isActive={isOpen}>
              {isOpen &&
                options
                  .filter(item => !inputValue || item?.includes(inputValue))
                  .map((item, index) => (
                    <SelectListItem
                      {...getItemProps({
                        style: {
                          backgroundColor:
                            index === highlightedIndex ? "lightgray" : "white"
                        },
                        key: item,
                        item,
                        index
                      })}
                    >
                      {item}
                    </SelectListItem>
                  ))}
            </SelectList>
          </Form>
        )}
    </Downshift>
  );
};

export default Dropdown;
