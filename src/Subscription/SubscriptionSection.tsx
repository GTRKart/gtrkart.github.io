import { useContext } from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { VerifyEmailMessage } from '../components/Auth/VerifyEmailMessage';
import Icon from '../components/Icon';
import GlobalContext from '../context/GlobalContext';
import {
  SubscriptionDescriptionContainer,
  SubscriptionInfoContainer,
  SubscriptionPaymentContainer,
  SubscriptionSectionContainer,
  SubscriptionTitle,
} from './Subscription.styles';
import SubscriptionForm from './SubscriptionForm';
import { SubscriptionNavBar } from './SubscriptionNavBar';

const SubscriptionSection = () => {
  const { isFormOpen } = useContext(GlobalContext);

  return (
    <SubscriptionSectionContainer $isFormOpen={isFormOpen}>
      <SubscriptionNavBar />

      <SubscriptionTitle>GTR Racing - 7ª etapa</SubscriptionTitle>

      <SubscriptionInfoContainer>
        <SubscriptionDescriptionContainer>
          <p>
            <Icon name="date" />
            <time dateTime="2023-07-01T16:00:00.000Z"> 1 de Julho de 2023</time>
          </p>
          <p>
            <Icon name="time" /> 16:00
          </p>
          <p>
            <Icon name="location" /> Kartódromo de Itú
          </p>
          <p>
            <strong>Nº de pilotos:</strong> de 15 a 35
          </p>
          <p>
            <strong>Vagas disponíveis:</strong> 12
          </p>
          <p>
            <strong>Lastro:</strong> 100Kg (a pesagem será feita na hora)
          </p>
        </SubscriptionDescriptionContainer>

        <SubscriptionPaymentContainer>
          <p>
            <strong>Pagamento:</strong>
          </p>
          <p>R$ 140,00 por piloto</p>
          <p>A vista. PIX: 229.427.918-29 (Rodrigo)</p>
          <p>
            <strong>Pagar até 23 de Junho de 2023 às 12:00</strong>
          </p>

          <hr />

          <p>
            <strong>Inscrição</strong>
          </p>

          <LoginForm>
            <VerifyEmailMessage />
            <SubscriptionForm />
          </LoginForm>
        </SubscriptionPaymentContainer>
      </SubscriptionInfoContainer>
    </SubscriptionSectionContainer>
  );
};

export default SubscriptionSection;
