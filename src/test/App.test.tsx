import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import counterReducer from '../store/slices/counterSlice';

// 創建測試用的 store
const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('App Routing', () => {
  it('renders home page by default', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Welcome to Home Page/i)).toBeInTheDocument();
  });

  it('renders about page when navigating to /about', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('navigates to about page when clicking link', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await user.click(screen.getByRole('link', { name: /About/i }));

    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });

  it('navigates back to home when clicking home link', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await user.click(screen.getByRole('link', { name: /Home/i }));

    expect(screen.getByText(/Welcome to Home Page/i)).toBeInTheDocument();
  });

  it('navigates to counter page when clicking counter link', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    await user.click(screen.getByRole('link', { name: /Counter/i }));

    expect(screen.getByText(/Current Value/i)).toBeInTheDocument();
  });
});