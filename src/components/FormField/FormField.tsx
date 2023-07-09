import { ChangeEventHandler, HTMLInputTypeAttribute, useId } from 'react';
import { FormFieldWrapper, Input, Label } from './form-styled-components';

type FormFieldProps = {
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  name?: string | undefined;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
};

const FormField = ({ label, type = 'text', name, value, disabled, onChange }: FormFieldProps) => {
  const fieldId = useId();

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>{label}</Label>

      <Input
        id={fieldId}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={disabled ? undefined : onChange}
      />
    </FormFieldWrapper>
  );
};

export type { FormFieldProps };

export default FormField;