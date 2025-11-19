import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders home page title', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Welcome to Home Page/i })).toBeInTheDocument();
  });

  it('renders home page description', () => {
    render(<Home />);
    expect(screen.getByText(/This is the home page/i)).toBeInTheDocument();
  });
});