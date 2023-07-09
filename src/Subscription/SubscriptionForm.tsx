import { FirebaseError } from 'firebase/app';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import FormField from '../components/FormField/FormField';
import Icon from '../components/Icon';
import { Button, ErrorMessage, Row } from '../components/styled-components';
import { getErrorMessage, useAuth } from '../firebase/auth';
import { auth } from '../firebase/config';
import { useFormData } from '../hooks/useFormData';

type SubscriptionFormData = {
  displayName: string;
  cpf: string;
};

const SubscriptionForm = () => {
  const { user, error, userProfile, updateUserData } = useAuth();
  const { formData, setFormData, getInputProps } =
    useFormData<SubscriptionFormData>({
      displayName: '',
      cpf: '',
    });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUserData(formData);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      displayName: user?.displayName ?? '',
    });
  }, [user]);

  useEffect(() => {
    setFormData({
      ...formData,
      cpf: userProfile?.cpf ?? '',
    });
  }, [userProfile]);

  return (
    <form action="post" onSubmitCapture={handleSubmit}>
      {!!error && (
        <p>
          <ErrorMessage>{getErrorMessage(error as FirebaseError)}</ErrorMessage>
        </p>
      )}

      <FormField label="Nome" type="text" {...getInputProps('displayName')} />
      <FormField
        label="E-mail"
        type="email"
        value={user?.email ?? ''}
        disabled
      />
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
