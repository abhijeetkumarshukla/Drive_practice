 
 
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
 
  const counter = useSelector((state) => state.counter);

 
  const dispatch = useDispatch();

  
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
