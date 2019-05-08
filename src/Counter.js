import React, { useState } from 'react';
import styles from './Counter.module.css';

function Counter() {
  const [count, setCount] = useState(0);

  const canDecrement = () => {
    return count > 0;
  };

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count - 1)} disabled={!canDecrement()}>
        -
      </button>
      <span aria-label="counter">{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
