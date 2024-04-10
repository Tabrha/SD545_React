
// import React, {useState } from 'react';
// function App(){
//     let [count, setCount] = useState<number>(0);

//     const increment = () => {
//         setCount(count+=1)
//     }
//     const decrement = ()=>{
//         setCount(count-=1)
//     }
//     return (
//         <div>   
//         <h2>counter: {count} </h2>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }

// // export default App;
// import React, { useState } from 'react';

// function TemperatureConverter() {
//   const [celsius, setCelsius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('');

//   const handleCelsiusChange = (e:any) => {
//     setCelsius(e.target.value);
//   };

//   const convertToCelsius = () => {
//     const celsiusValue = parseFloat(celsius);
//     const fahrenheitValue = (celsiusValue * 9/5) + 32;
//     setFahrenheit(fahrenheitValue.toFixed(2));
//   };

//   return (
//     <div>
//       <h2>Temperature Converter</h2>
//       <label>
//         Celsius:
//         <input type="number" value={celsius} onChange={handleCelsiusChange} />
//       </label>
//       <button onClick={convertToCelsius}>Convert to Fahrenheit</button>
//       {fahrenheit && (
//         <p>
//           Fahrenheit: {fahrenheit}
//         </p>
//       )}
//     </div>
//   );
// }

// export default TemperatureConverter;
import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// controlled component
function TemperatureConverter() {
  const [celcius, setCelcius] = useState(0);
  const [fah, setFah] = useState<number | null>(null);

  const changeTemperature = (e: ChangeEvent<HTMLInputElement>) => {
    setCelcius(parseInt(e.target.value));
  }

  const convert = () => {
    setFah((9 / 5) * celcius + 32);
  }
  return (
    <>
      <input type='number' value={celcius} onChange={changeTemperature} />
      <button onClick={convert}>Convert to Fahrenheit</button>
      {fah && <div>Converted Fahrenheit: {fah}</div>}
    </>
  )
}

function App() {
  return (
    <div>
      <TemperatureConverter />
    </div>
  );
}

export default App; 