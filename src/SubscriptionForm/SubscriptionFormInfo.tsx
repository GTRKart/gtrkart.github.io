import Icon from "../components/Icon"
import { Row } from "../components/style-components"
import { SubscriptionEventInfo, SubscriptionPaymentInfo } from "./SubscriptionForm.styles"

const SubscriptionInfo = () => {
  return (
    <>
      <Row $gap="32px" $alignItems="flex-start">
        <SubscriptionEventInfo>
          <p>
            <Icon name="date" />
            <time dateTime="2023-07-01T16:00:00.000Z"> 1 de Julho de 2023</time>
          </p>
          <p><Icon name="time" /> 16:00</p>
          <p><Icon name="location" /> Kartódromo de Itú</p>
        </SubscriptionEventInfo>

        <SubscriptionPaymentInfo>
          <p><strong>Pagamento:</strong></p>
          <p>R$ 140,00 por piloto</p>
          <p>A vista. PIX: 229.427.918-29 (Rodrigo)</p>
          <p><strong>Pagar até 23 de Junho de 2023 às 12:00</strong></p>
        </SubscriptionPaymentInfo>
      </Row>

      <section>
        <p><strong>Nº de pilotos:</strong> de 15 a 35</p>
        <p><strong>Vagas disponíveis:</strong> 12</p>
        <p><strong>Lastro:</strong> 100Kg (a pesagem será feita na hora)</p>
      </section>
    </>
  );
}

export default SubscriptionInfo;
