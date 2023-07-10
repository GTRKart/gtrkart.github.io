import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import Icon from '../Icon';
import { Button, FlexItem, Row } from '../styled-components';
import { DrawerContainer } from './Drawer.styles';

const Drawer = () => {
  const { drawerState, closeDrawer } = useContext(GlobalContext);
  const { title, content, isOpen } = drawerState;

  return (
    <DrawerContainer $open={isOpen}>
      <Row>
        <Button type="button" $unstyled onClick={closeDrawer}>
          <Icon name="arrow-left" /> Voltar
        </Button>
        <FlexItem>
          <p>{title}</p>
        </FlexItem>
      </Row>

      <hr />

      {content}
    </DrawerContainer>
  );
};

export { Drawer };
