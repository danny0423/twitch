import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Routing', () => {
  it('renders home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  it('renders about page when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });

  it('navigates to about page when clicking link', async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    await user.click(screen.getByText(/About/i));
    
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });

  it('navigates back to home when clicking home link', async () => {
    const user = userEvent.setup();
    
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    
    await user.click(screen.getByText(/Home/i));
    
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });
});