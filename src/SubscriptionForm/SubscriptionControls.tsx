import { useState } from "react";
import FormField from "../components/FormField/FormField";
import Icon from "../components/Icon";
import { Button, Row } from "../components/style-components";

type User = {
  name: string;
  email: string;
  cpf: string;
};

const mockUser = {
  name: 'John Doe',
  email: 'john@doe.doe',
  cpf: '97898798798',
};

const SubscriptionControls = () => {
  const [user, setUser] = useState<User>();

  return (
    <>
      <p>
        <strong>Inscrição</strong>
      </p>
      {user ? (
        <>
          <FormField label="Nome" type="text" name="name" value={user.name} onChange={console.log} />
          <FormField label="E-mail" type="email" name="email" value={user.email} disabled />
          <FormField label="CPF" type="text" name="cpf" value={user.cpf} onChange={console.log} />
          <Row>
            <Button $unstyled type="button" onClick={() => setUser(undefined)}>
              <Icon name="arrow-left" /> Sair
            </Button>
            <Button type="button" onClick={console.log}>
              Confirmar inscrição <Icon name="arrow-right" />
            </Button>
          </Row>
        </>
      ) : (
        <>
          <p>Faça login ou cadastre-se para fazer a sua inscrição.</p>
          <FormField label="E-mail" type="email" name="email" value="" onChange={console.log} />
          <FormField label="Senha" type="password" name="password" value="" onChange={console.log} />
          <p>
            <Button type="button" onClick={() => setUser(mockUser)}>Entrar</Button>
          </p>
        </>
      )}
    </>
  );
};

export default SubscriptionControls;
