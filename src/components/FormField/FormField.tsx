import { useId } from "react";
import { FormFieldWrapper, Input, Label } from "./form-styled-components";

type FormFieldProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, disabled, onChange }) => {
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

export default FormField;