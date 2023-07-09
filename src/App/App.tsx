import SubscriptionSection from '../Subscription/SubscriptionSection';
import { AppMainContainer } from './App.styles';
import AppCover from './AppCover/AppCover';
import AppHeader from './AppHeader/AppHeader';

function App() {
  return (
    <AppMainContainer>
      <AppHeader />
      <AppCover />
      <SubscriptionSection />
    </AppMainContainer>
  );
}

export default App;
