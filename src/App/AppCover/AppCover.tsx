import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import AppIntro from '../AppIntro/AppIntro';
import { AppBackground } from './AppCover.styles';

const AppCover = () => {
  const { isFormOpen } = useContext(GlobalContext);

  return (
    <AppBackground $isFormOpen={isFormOpen}>
      <AppIntro />
    </AppBackground>
  );
};

export default AppCover;
