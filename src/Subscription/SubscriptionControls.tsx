import { signOut } from 'firebase/auth';
import FormField from '../components/FormField/FormField';
import Icon from '../components/Icon';
import { Button, Row } from '../components/styled-components';
import { useAuth } from '../firebase/auth';
import { auth } from '../firebase/config';

const SubscriptionControls = () => {
  const { user } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form action="post" onSubmit={handleSubmit}>
      <FormField
        label="Nome"
        type="text"
        name="name"
        value={user?.displayName ?? ''}
        onChange={console.log}
      />
      <FormField
        label="E-mail"
        type="email"
        name="email"
        value={user?.email ?? ''}
        disabled
      />
      <FormField label="CPF" type="text" name="cpf" onChange={console.log} />
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

export default SubscriptionControls;
