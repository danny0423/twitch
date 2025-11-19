import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('renders home page content', () => {
    render(<Home />);
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});