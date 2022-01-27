import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/the alien is gobblin up all the electricity!/i);
  expect(linkElement).toBeInTheDocument();
});
