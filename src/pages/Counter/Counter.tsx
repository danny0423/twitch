import { type ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { increment, decrement, incrementByAmount, reset } from '../../store/slices/counterSlice';
import { tr } from '../../i18n/config';

function Counter(): ReactElement {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<string>('2');

  const handleIncrementByAmount = () => {
    const amount = parseInt(incrementAmount, 10);
    if (!isNaN(amount)) {
      dispatch(incrementByAmount(amount));
    }
  };

  return (
    <div>
      <h1>{tr('counter.title')}</h1>
      <div style={{ fontSize: '2rem', margin: '20px 0' }}>
        {tr('counter.currentValue')}: {count}
      </div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => dispatch(increment())}>
          {tr('counter.increment')}
        </button>
        <button onClick={() => dispatch(decrement())}>
          {tr('counter.decrement')}
        </button>
        <button onClick={() => dispatch(reset())}>
          {tr('counter.reset')}
        </button>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{ width: '100px', padding: '5px' }}
        />
        <button onClick={handleIncrementByAmount}>
          {tr('counter.addAmount')}
        </button>
      </div>
    </div>
  );
}

export default Counter;
