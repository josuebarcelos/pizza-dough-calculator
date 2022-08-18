import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  render(<App />);
  const headerParagraph = screen.getByText(/Pizza Calculator/i);
  expect(headerParagraph).toBeInTheDocument();
  const recipeComp = screen.getByTestId('recipe-component')
  expect(recipeComp).toBeInTheDocument()
});
