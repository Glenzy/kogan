import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  margin: auto;
  padding: 0;
`;

export const Input = styled.input<{ isActive: boolean }>`
  width: 25rem;
  border: 1px solid black;
  border-bottom-left-radius: ${({ isActive }) => isActive && 0};
  border-bottom-right-radius: ${({ isActive }) => isActive && 0};
  border-radius: 3px;
`;

export const SelectList = styled.ul<{ isActive: boolean }>`
  ${({ isActive }) => !isActive && 'display: none;'}
  width: 25rem;
  padding: 0;
  margin: 0;
  border: 1px solid;
  border-top-left-radius: ${({ isActive }) => isActive && 0};
  border-top-right-radius: ${({ isActive }) => isActive && 0};
  border-radius: 3px;
  border-top: 0;
`;
export const SelectListItem = styled.li`
  list-style: none;
  width: 100%;
`;

export const Button = styled.button<React.ButtonHTMLAttributes<any>>`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  position:absolute;
  right:0;
  width: 20px;
  text-align: center;
  padding: 0;
  color: red;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;
