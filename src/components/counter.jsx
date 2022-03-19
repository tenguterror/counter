import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const onCountZero = count === 0;

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={onCountZero}>
        -
      </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
