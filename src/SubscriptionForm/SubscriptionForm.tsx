import { useContext, useState } from "react";
import FormField from "../components/FormField/FormField";
import Icon from "../components/Icon";
import { Button, FlexItem, Row } from "../components/style-components";
import GlobalContext from "../context/GlobalContext";
import { SubscriptionContainer, SubscriptionControlsSection, SubscriptionTitle } from "./SubscriptionForm.styles";
import SubscriptionInfo from "./SubscriptionFormInfo";

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

const SubscriptionForm = () => {
  const [user, setUser] = useState<User>();
  const { isFormOpen, closeForm } = useContext(GlobalContext);

  return (
    <SubscriptionContainer $isFormOpen={isFormOpen}>
        <Row>
          <Button type="button" $unstyled onClick={closeForm}>
            <Icon name="arrow-left" /> Voltar
          </Button>
          <FlexItem>
            <p>Próxima corrida</p>
          </FlexItem>
        </Row>

        <hr />

        <SubscriptionTitle>GTR Racing - 7ª etapa</SubscriptionTitle>

        <SubscriptionInfo />

        <SubscriptionControlsSection>
          <p>
            <strong>Inscrição</strong>
          </p>
          {user ? (
            <>
              <FormField label="Nome" type="text" name="name" value={user.name} onChange={console.log} />
              <FormField label="E-mail" type="email" name="email" value={user.email} disabled />
              <FormField label="CPF" type="text" name="cpf" value={user.cpf} onChange={console.log} />
              <Row>
                <Button $unstyled type="button" onClick={() => setUser(undefined)}><Icon name="arrow-left" /> Sair</Button>
                <Button type="button" onClick={console.log}>Confirmar inscrição <Icon name="arrow-right" /></Button>
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
        </SubscriptionControlsSection>
      </SubscriptionContainer>
  );
}

export default SubscriptionForm;
