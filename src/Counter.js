import React, { useState } from 'react';
import styles from './Counter.module.css';
import axios from 'axios';

function Counter(props) {
  const sessionId = props.sessionId;
  const config = props.config;
  const [count, setCount] = useState(0);

  const canDecrement = () => {
    return count > 0;
  };

  const increment = () => {
    let newValue = count + 1;
    setCount(newValue);
    sendValueToApi(newValue);
  };
  const decrement = () => {
    let newValue = count - 1;
    setCount(newValue);
    sendValueToApi(newValue);
  };

  return (
    <div className={styles.counter}>
      <button onClick={() => decrement()} disabled={!canDecrement()}>
        -
      </button>
      <span aria-label="counter">{count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );

  function sendValueToApi(newValue) {
    axios.put(`${config.baseUrl}/api/sessions/${sessionId}`, newValue, { headers: { 'Content-Type': 'application/json' } });
  }
}

export default Counter;
