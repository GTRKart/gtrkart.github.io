import { useContext } from "react";
import Icon from "../components/Icon";
import { Button, FlexItem, Row } from "../components/style-components";
import GlobalContext from "../context/GlobalContext";
import { SubscriptionContainer, SubscriptionTitle } from "./SubscriptionForm.styles";
import SubscriptionInfo from "./SubscriptionFormInfo";

const SubscriptionForm = () => {
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
      </SubscriptionContainer>
  );
}

export default SubscriptionForm;
