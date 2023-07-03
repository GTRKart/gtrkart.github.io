import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import { AppMainContainer } from './App.styles';
import AppCover from './AppCover/AppCover';
import AppHeader from './AppHeader/AppHeader';

function App() {
  return (
    <AppMainContainer>
      <AppHeader />
      <AppCover />
      <SubscriptionForm />
    </AppMainContainer>
  );
}

export default App;
