import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import FormField from '../components/FormField/FormField';
import Icon from '../components/Icon';
import { Button, Row } from '../components/styled-components';
import { useAuth } from '../firebase/auth';
import { auth } from '../firebase/config';
import { useFormData } from '../hooks/useFormData';

type SubscriptionFormData = {
  displayName: string;
  email: string;
  cpf: string;
};

const SubscriptionForm = () => {
  const { user, updateUserData } = useAuth();
  const { formData, setFormData, getInputProps } =
    useFormData<SubscriptionFormData>({
      displayName: user?.displayName ?? '',
      email: user?.email ?? '',
      cpf: '',
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    updateUserData(formData);
  };

  useEffect(() => {
    if (!user) return;

    const { displayName, email } = user;
    setFormData({
      ...formData,
      displayName: displayName ?? '',
      email: email ?? '',
    });
  }, [user]);

  return (
    <form action="post" onSubmitCapture={handleSubmit}>
      <FormField label="Nome" type="text" {...getInputProps('displayName')} />
      <FormField label="E-mail" type="email" value={formData.email} disabled />
      <FormField label="CPF" type="text" {...getInputProps('cpf')} />
      <Row>
        <Button $unstyled type="button" onClick={() => signOut(auth)}>
          <Icon name="arrow-left" /> Sair
        </Button>
        <Button type="submit">
          Confirmar inscrição <Icon name="arrow-right" />
        </Button>
      </Row>
    </form>
  );
};

export default SubscriptionForm;
