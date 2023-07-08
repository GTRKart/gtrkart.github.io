import { styled } from 'styled-components';

export const FormFieldWrapper = styled.div`
  position: relative;
  margin-top: 16px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label`
  flex: 1;
  font: inherit;
  text-transform: uppercase;
`;

export const Input = styled.input`
  flex: 2;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font: inherit;
  color: #000;
  background-color: #fff;
  box-shadow: 0 0 transparent;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 0 none;
    border-color: blue;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
`;
