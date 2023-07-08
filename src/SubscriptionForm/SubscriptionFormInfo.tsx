import Icon from '../components/Icon';
import SubscriptionControls from './SubscriptionControls';
import { SubscriptionEventInfo, SubscriptionInfoContainer, SubscriptionPaymentInfo } from './SubscriptionForm.styles';

const SubscriptionInfo = () => {
  return (
    <SubscriptionInfoContainer>
      <SubscriptionEventInfo>
        <p>
          <Icon name="date" />
          <time dateTime="2023-07-01T16:00:00.000Z"> 1 de Julho de 2023</time>
        </p>
        <p><Icon name="time" /> 16:00</p>
        <p><Icon name="location" /> Kartódromo de Itú</p>
        <p><strong>Nº de pilotos:</strong> de 15 a 35</p>
        <p><strong>Vagas disponíveis:</strong> 12</p>
        <p><strong>Lastro:</strong> 100Kg (a pesagem será feita na hora)</p>
      </SubscriptionEventInfo>

      <SubscriptionPaymentInfo>
        <p><strong>Pagamento:</strong></p>
        <p>R$ 140,00 por piloto</p>
        <p>A vista. PIX: 229.427.918-29 (Rodrigo)</p>
        <p><strong>Pagar até 23 de Junho de 2023 às 12:00</strong></p>

        <hr />

        <SubscriptionControls />
      </SubscriptionPaymentInfo>
    </SubscriptionInfoContainer>
  );
};

export default SubscriptionInfo;
