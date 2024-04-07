
// import { useState } from 'react';

// function TemperatureConverter() {
//   const [celsius, setCelsius] = useState('');
//   const [fahrenheit, setFahrenheit] = useState('');

//   const handleCelsiusChange = (e:any) => {
//     setCelsius(e.target.value);
   


//   };

//   const convertToCelsius = () => {
//     const fahrenheitValue = parseFloat(celsius);
//     const celsiusValue = (fahrenheitValue - 32) * 9/5;
    
//     setFahrenheit(celsiusValue.toFixed(2));
   
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


// import { useState, ChangeEvent } from "react";


// function TemperatureConverter(){
//   const [celsius, setCelsius] = useState<number>(0);
//   const [fahrennheit, setFahrenheit] = useState<number>(0)
// }
// const convertTocelsius =()=>{
//   const celsiusvalue = parseFloat(celsius);
// }