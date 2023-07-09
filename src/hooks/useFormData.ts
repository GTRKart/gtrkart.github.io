import { useState } from 'react';

const useFormData = <T>(initialState: T) => {
  const [formData, setFormData] = useState<T>(initialState);

  const getInputProps = (name: keyof T) => ({
    name,
    value: formData[name],
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFormData({ ...formData, [name]: event.target.value });
    },
  });

  return {
    formData,
    setFormData,
    getInputProps,
  };
};

export { useFormData };
