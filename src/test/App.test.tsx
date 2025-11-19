import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.tsx';

describe('App', () => {
  it('renders hello message', () => {
    render(<App />);
    expect(screen.getByText(/Hello React/i)).toBeInTheDocument();
  });
});
