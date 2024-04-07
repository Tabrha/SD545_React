import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TemperatureConverter from './TemperatureConverter';
import Counter from './Counter'
import RandomNumberGenerator from './RandomNumberGenerator'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(<App />);
root.render(
  <React.StrictMode>
    <Counter />
    <br></br>
    <RandomNumberGenerator />
    <br></br>
    <TemperatureConverter />
    <br></br>
  </React.StrictMode>
);