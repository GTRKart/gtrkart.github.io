import { useContext } from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { VerifyEmailMessage } from '../components/Auth/VerifyEmailMessage';
import Icon from '../components/Icon';
import { FlexItem, Row } from '../components/styled-components';
import GlobalContext from '../context/GlobalContext';
import { useRaceEvents } from '../hooks/useRaceEvents';
import {
  SubscriptionDescriptionContainer,
  SubscriptionInfoContainer,
  SubscriptionPaymentContainer,
  SubscriptionSectionContainer,
  SubscriptionTitle,
} from './Subscription.styles';
import SubscriptionForm from './SubscriptionForm';
import { SubscriptionNavBar } from './SubscriptionNavBar';

const printDate = (date: Date | undefined) => {
  if (!date) {
    return '';
  }

  return date.toLocaleDateString('pt-BR', {
    dateStyle: 'full',
  });
};

const printTime = (date: Date | undefined) => {
  if (!date) {
    return '';
  }

  return date.toLocaleTimeString('pt-BR', {
    timeStyle: 'short',
  });
};

const printMoney = (price: number | undefined) => {
  if (!price) {
    return '';
  }

  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

const SubscriptionSection = () => {
  const { isFormOpen } = useContext(GlobalContext);
  const [currentRaceEvent] = useRaceEvents();

  if (!currentRaceEvent) {
    return (
      <SubscriptionSectionContainer $isFormOpen={isFormOpen}>
        <p>Carregando...</p>
      </SubscriptionSectionContainer>
    );
  }

  const subscriptions = currentRaceEvent.subscriptions?.length || 0;
  const remainingPositions =
    (currentRaceEvent.maxParticipants || 0) - subscriptions;

  return (
    <SubscriptionSectionContainer $isFormOpen={isFormOpen}>
      <SubscriptionNavBar />

      <SubscriptionTitle>{currentRaceEvent.title}</SubscriptionTitle>

      <SubscriptionInfoContainer>
        <SubscriptionDescriptionContainer>
          <Row>
            <FlexItem>
              <Icon name="date" />
              <time dateTime={currentRaceEvent.datetime?.toISOString()}>
                {` ${printDate(currentRaceEvent.datetime)}`}
              </time>
            </FlexItem>
            <FlexItem>
              <Icon name="time" />
              {` ${printTime(currentRaceEvent.datetime)}`}
            </FlexItem>
          </Row>
          <p>
            <Icon name="location" />
            {` ${currentRaceEvent.location}`}
          </p>
          <p>
            <strong>Lastro:</strong> {currentRaceEvent.weight}Kg (a pesagem será
            feita na hora)
          </p>
          <p>
            <strong>Nº de pilotos:</strong>
            {` de ${currentRaceEvent.minParticipants} a ${currentRaceEvent.maxParticipants} (${subscriptions} inscritos, ${remainingPositions} restantes)`}
          </p>
        </SubscriptionDescriptionContainer>

        <SubscriptionPaymentContainer>
          <p>
            <strong>Valor:</strong>
            {` ${printMoney(currentRaceEvent.price)} ${
              currentRaceEvent.priceDetails
            }`}
          </p>
          <p>{currentRaceEvent.paymentMethod}</p>
          <p>
            <strong>
              {`Pagar até ${printDate(
                currentRaceEvent.paymentDeadline || currentRaceEvent.datetime
              )}`}
            </strong>
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
