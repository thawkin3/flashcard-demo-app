import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header text', () => {
  render(<App />);
  expect(screen.getByText('Flashcard Demo App')).toBeInTheDocument();
});
