import { render, screen } from '@testing-library/react';
import GlobalContext, {
  globalContextInitialState,
} from '../context/GlobalContext';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const textElement = screen.getAllByText(/GTR Racing/i);
  expect(textElement.length).toBeGreaterThan(0);
});

test('renders action button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Inscreva-se/i);
  expect(buttonElement).toBeInTheDocument();
});

test('click cta calls openForm', () => {
  const openForm = jest.fn();
  const closeForm = jest.fn();

  render(
    <GlobalContext.Provider
      value={{ ...globalContextInitialState, openForm, closeForm }}
    >
      <App />
    </GlobalContext.Provider>
  );

  const buttonElement = screen.getByText(/Inscreva-se/i);
  buttonElement.click();

  expect(openForm).toHaveBeenCalled();

  const closeButtonElement = screen.getByText(/Voltar/i);
  closeButtonElement.click();

  expect(closeForm).toHaveBeenCalled();
});
