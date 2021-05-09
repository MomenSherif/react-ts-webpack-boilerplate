import React, { useState } from 'react';

import IMAGE from './react.png';
import LOGO from './logo.svg';

import './style.css';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
};
