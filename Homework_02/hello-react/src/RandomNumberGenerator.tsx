import React, { useState } from 'react';

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const generateRandomNumber = () => {
    let randomNum: number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && (
        <p>Generated Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
