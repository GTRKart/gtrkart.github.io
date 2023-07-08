import { createContext, useState } from 'react';

type GlobalContextType = {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
};

const initialState = {
  isFormOpen: false,
  openForm: () => {},
  closeForm: () => {}
};

const GlobalContext = createContext<GlobalContextType>(initialState);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <GlobalContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
