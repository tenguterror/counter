import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} >Add one</button>
      <button onClick={decrement} >Subtract one</button>
    </div>
  )
};