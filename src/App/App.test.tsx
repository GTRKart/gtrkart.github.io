import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const textElement = screen.getByText(/GTR Racing/i);
  expect(textElement).toBeInTheDocument();
});
