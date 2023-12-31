import { useContext } from 'react';
import Icon from '../components/Icon';
import { RaceEventForm } from '../components/RaceEventForm/RaceEventForm';
import { Button, FlexItem, Row } from '../components/styled-components';
import GlobalContext from '../context/GlobalContext';
import { useAuth } from '../firebase/auth';

const SubscriptionNavBar = () => {
  const { closeForm, openDrawer } = useContext(GlobalContext);
  const { userPermissions } = useAuth();

  return (
    <>
      <Row>
        <Button type="button" $unstyled onClick={closeForm}>
          <Icon name="arrow-left" /> Voltar
        </Button>
        <FlexItem>
          <p>Próxima corrida</p>
        </FlexItem>
        {userPermissions?.admin && (
          <Button
            type="button"
            $unstyled
            onClick={() => openDrawer('Editar corrida', <RaceEventForm />)}
          >
            <Icon name="edit" /> Editar
          </Button>
        )}
      </Row>

      <hr />
    </>
  );
};

export { SubscriptionNavBar };
