import { createContext, useState } from 'react';

type DrawerState = {
  title: string;
  content: React.ReactNode | null;
  isOpen: boolean;
};

type GlobalContextType = {
  isFormOpen: boolean;
  drawerState: DrawerState;
  openForm: () => void;
  closeForm: () => void;
  openDrawer: (title: string, content: React.ReactNode) => void;
  closeDrawer: () => void;
};

const initialDrawerState = {
  title: '',
  content: null,
  isOpen: false,
};

export const globalContextInitialState = {
  isFormOpen: false,
  drawerState: initialDrawerState,
  openForm: () => {},
  closeForm: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
};

const GlobalContext = createContext<GlobalContextType>(
  globalContextInitialState
);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [drawerState, setDrawerState] =
    useState<DrawerState>(initialDrawerState);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const openDrawer = (title: string, content: React.ReactNode) =>
    setDrawerState({ title, content, isOpen: true });
  const closeDrawer = () => setDrawerState({ ...drawerState, isOpen: false });

  const value = {
    isFormOpen,
    drawerState,
    openForm,
    closeForm,
    openDrawer,
    closeDrawer,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
