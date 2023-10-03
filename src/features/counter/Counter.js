import { useSelector, useDispatch } from 'react-redux';
import { increment, 
  decrement,
  reset,
  incrementByAmount
} from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmout, setIncrementeAmount] = useState(0)

  const addValue = Number(incrementAmout) || 0;

  const resetAll = () => {
    setIncrementeAmount(0);
    dispatch(reset());
  }

  return (
    <section>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input 
        type='text'
        value={incrementAmout}
        onChange={(e) => setIncrementeAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter;