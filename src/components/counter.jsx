import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count === 0) {
      alert(`Can't go lower than 0!`);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};
