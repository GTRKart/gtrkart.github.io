import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useId,
  useMemo,
} from 'react';
import { FormFieldWrapper, Input, Label } from './form-styled-components';

type FormFieldProps = {
  label: string;
  type?: HTMLInputTypeAttribute | 'textarea';
  name?: string | undefined;
  value?: string | number | readonly string[] | boolean | Date | undefined;
  disabled?: boolean | undefined;
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};

const FormField = ({
  label,
  type = 'text',
  name,
  value,
  disabled,
  onChange,
}: FormFieldProps) => {
  const fieldId = useId();

  const fieldValue = useMemo(() => {
    if (type === 'date' && value) {
      return new Date(value as string).toISOString().slice(0, 10);
    }

    if (type === 'datetime-local' && value) {
      return new Date(value as string).toISOString().slice(0, 16);
    }

    if (type === 'boolean') {
      return value ? 'Sim' : 'Não';
    }

    return value?.toString() ?? '';
  }, [type, value]);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>{label}</Label>

      <Input
        id={fieldId}
        type={type}
        name={name}
        value={fieldValue}
        disabled={disabled}
        onChange={disabled ? undefined : onChange}
      />
    </FormFieldWrapper>
  );
};

export type { FormFieldProps };

export default FormField;
