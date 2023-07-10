import SubscriptionSection from '../Subscription/SubscriptionSection';
import { Drawer } from '../components/Drawer/Drawer';
import { AppMainContainer } from './App.styles';
import AppCover from './AppCover/AppCover';
import AppHeader from './AppHeader/AppHeader';

function App() {
  return (
    <AppMainContainer>
      <Drawer />
      <AppHeader />
      <AppCover />
      <SubscriptionSection />
    </AppMainContainer>
  );
}

export default App;
