import { useContext } from 'react';
import Icon from '../components/Icon';
import { Button, FlexItem, Row } from '../components/styled-components';
import GlobalContext from '../context/GlobalContext';

const SubscriptionNavBar = () => {
  const { closeForm } = useContext(GlobalContext);

  return (
    <>
      <Row>
        <Button type="button" $unstyled onClick={closeForm}>
          <Icon name="arrow-left" /> Voltar
        </Button>
        <FlexItem>
          <p>Próxima corrida</p>
        </FlexItem>
      </Row>

      <hr />
    </>
  );
};

export { SubscriptionNavBar };
