import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Counter from './Counter';
import counterReducer from '../../store/slices/counterSlice';

// 創建測試用的 store
const createTestStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};

describe('Counter Component', () => {
  test('renders counter with initial value of 0', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(screen.getByText(/current value/i)).toBeInTheDocument();
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  test('increments counter when increment button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await user.click(incrementButton);

    expect(screen.getByText(/: 1/)).toBeInTheDocument();
  });

  test('decrements counter when decrement button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await user.click(decrementButton);

    expect(screen.getByText(/: -1/)).toBeInTheDocument();
  });

  test('resets counter to 0 when reset button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    // Increment a few times
    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    expect(screen.getByText(/: 3/)).toBeInTheDocument();

    // Reset
    await user.click(resetButton);

    expect(screen.getByText(/: 0/)).toBeInTheDocument();
  });

  test('adds custom amount when add amount button is clicked', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const input = screen.getByRole('spinbutton');
    const addButton = screen.getByRole('button', { name: /add amount/i });

    // Clear input and type new value
    await user.clear(input);
    await user.type(input, '5');
    await user.click(addButton);

    expect(screen.getByText(/: 5/)).toBeInTheDocument();
  });

  test('handles multiple increment and decrement operations', async () => {
    const user = userEvent.setup();
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText(/: 3/)).toBeInTheDocument();

    await user.click(decrementButton);
    expect(screen.getByText(/: 2/)).toBeInTheDocument();
  });
});
