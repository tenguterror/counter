import React, { useState, useEffect } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  // This will bring the count up one at a time starting at zero
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // This will lower the count one at a time
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // This will disable the minus button if at zero to not allow count to go below zero. Either true or false
  const onCountZero = count <= 0;

  // This will reset the count if the reset button is clicked
  const resetCount = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `The current count is: ${count}`;
  }, [count]);

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
