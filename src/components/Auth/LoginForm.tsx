import { FirebaseError } from 'firebase/app';
import { SignInFormData, getErrorMessage, useAuth } from '../../firebase/auth';
import { useFormData } from '../../hooks/useFormData';
import FormField from '../FormField/FormField';
import { Button, ErrorMessage } from '../styled-components';

const initialFormData: SignInFormData = {
  email: '',
  password: '',
};

const LoginForm = ({ children }: { children?: React.ReactNode }) => {
  const { user, error, signInOrCreateUser } = useAuth();
  const {
    formData: loginFormData,
    setFormData,
    getInputProps,
  } = useFormData<SignInFormData>(initialFormData);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signInOrCreateUser(loginFormData);
    setFormData(initialFormData);
  };

  if (user) {
    return <>{children}</>;
  }

  return (
    <form action="post" onSubmitCapture={handleSubmit}>
      <p>Faça login ou cadastre-se para fazer a sua inscrição.</p>

      {!!error && (
        <p>
          <ErrorMessage>{getErrorMessage(error as FirebaseError)}</ErrorMessage>
        </p>
      )}

      <FormField label="E-mail" type="email" {...getInputProps('email')} />
      <FormField label="Senha" type="password" {...getInputProps('password')} />
      <p>
        <Button type="submit">Entrar</Button>
      </p>
    </form>
  );
};

export { LoginForm };
