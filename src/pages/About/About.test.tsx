import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders about page content', () => {
    render(<About />);
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });
});