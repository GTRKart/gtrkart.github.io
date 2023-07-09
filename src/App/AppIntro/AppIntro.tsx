import { useContext } from 'react';
import Icon from '../../components/Icon';
import { Button } from '../../components/styled-components';
import GlobalContext from '../../context/GlobalContext';
import { AppIntroContainer, AppIntroTitle } from './AppIntro.styles';

const AppIntro = () => {
  const { openForm } = useContext(GlobalContext);

  return (
    <AppIntroContainer>
      <p>Próxima corrida</p>
      <AppIntroTitle>GTR Racing - 7ª etapa</AppIntroTitle>
      <p>
        <time dateTime="2023-07-01T16:00:00.000Z">
          1 de Julho de 2023 às 16:00
        </time>
      </p>
      <p>Kartódromo de Itú</p>
      <p>
        <Button onClick={openForm}>
          Inscreva-se <Icon name="arrow-right" />
        </Button>
      </p>
    </AppIntroContainer>
  );
};

export default AppIntro;
