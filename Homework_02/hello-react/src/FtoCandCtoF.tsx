import React, { ChangeEvent, useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCelsius(e.target.value);
    if (e.target.value !== '') {
      const celsiusValue = parseFloat(e.target.value);
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFahrenheit(e.target.value);
    if (e.target.value !== '') {
      const fahrenheitValue = parseFloat(e.target.value);
      const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
      setCelsius(celsiusValue.toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>
        Celsius:
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </label>
      <br />
      <label>
        Fahrenheit:
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </label>
      <br />
      {fahrenheit && (
        <p>
          Fahrenheit: {fahrenheit}
        </p>
      )}
      {celsius && (
        <p>
          Celsius: {celsius}
        </p>
      )}
    </div>
  );
}

export default TemperatureConverter;