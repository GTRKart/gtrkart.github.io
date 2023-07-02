import { useState } from 'react';
import Icon from '../components/Icon';
import { Button, FlexItem, Row } from '../components/style-components';
import { AppBackground, AppForm, AppHeader, AppIntro, AppPaymentInfo, SubscriptionSection } from './App.styles';
import FormField from '../components/FormField/FormField';

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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [user, setUser] = useState<User>();

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <AppBackground $isFormOpen={isFormOpen}>
        <AppHeader>
          <p>
            GTR Racing
          </p>
        </AppHeader>

        <AppIntro>
          <p>Próxima corrida</p>
          <h1>GTR RACING - 7ª ETAPA</h1>
          <time dateTime="2023-07-01T16:00:00.000Z">1 de Julho de 2023 às 16:00</time>
          <p>Kartódromo de Itú</p>
          <p>
            <Button onClick={openForm}>Inscreva-se <Icon name="arrow-right" /></Button>
          </p>
        </AppIntro>
      </AppBackground>

      <AppForm $isFormOpen={isFormOpen}>
        <Row>
          <Button type="button" $unstyled onClick={closeForm}>
            <Icon name="arrow-left" /> Voltar
          </Button>
          <FlexItem>
            <p>Próxima corrida</p>
          </FlexItem>
        </Row>

        <hr />

        <p>
          <strong>GTR Racing - 7ª etapa</strong>
        </p>

        <Row $gap="32px" $alignItems="flex-start">
          <section>
            <p>
              <Icon name="date" />
              <time dateTime="2023-07-01T16:00:00.000Z"> 1 de Julho de 2023</time>
            </p>
            <p><Icon name="time" /> 16:00</p>
            <p><Icon name="location" /> Kartódromo de Itú</p>
          </section>

          <AppPaymentInfo>
            <p><strong>Pagamento:</strong></p>
            <p>R$ 140,00 por piloto</p>
            <p>A vista. PIX: 229.427.918-29 (Rodrigo)</p>
            <p><strong>Pagar até 23 de Junho de 2023 às 12:00</strong></p>
          </AppPaymentInfo>
        </Row>

        <section>
          <p><strong>Nº de pilotos:</strong> de 15 a 35</p>
          <p><strong>Vagas disponíveis:</strong> 12</p>
          <p><strong>Lastro:</strong> 100Kg (a pesagem será feita na hora)</p>
        </section>

        <SubscriptionSection>
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
        </SubscriptionSection>
      </AppForm>
    </div>
  );
}

export default App;
