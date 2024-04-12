import React, { ChangeEvent, useState } from 'react';

// import { ChangeEvent } from "react";





function CalculatorApp() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [sum, setSum] = useState(0);

  const n1Handler = (e: ChangeEvent<HTMLInputElement>) => {
    setN1(Number(e.target.value));
  };

  const n2Handler = (e: ChangeEvent<HTMLInputElement>) => {
    setN2(Number(e.target.value));
  };

  const calculateSum = () => {
    setSum(n1 + n2);
  };

  return (
    <div>
      <h1>Basic Calculator App!</h1>
      <span>
        <input type='number' value={n1} onChange={n1Handler} />
        <span>+</span>
        <input type='number' value={n2} onChange={n2Handler} />
        <span>=</span>
        <button onClick={calculateSum}>Calculate Sum</button>
      </span>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default CalculatorApp;





