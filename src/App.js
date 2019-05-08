import React from 'react';
import './App.css';
import Session from './Session';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Session config={props.config} />
      </header>
    </div>
  );
}

export default App;
