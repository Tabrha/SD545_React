import React, { useState, MouseEvent } from 'react'
import { useReducer } from 'react'

// export default function CounterUseState() {
//     const [numbers, setNumbers] = useState<number[]>([]);
//     const [sum, setSum] = useState(0);

//     const push = () => {
//         setNumbers([...numbers, Math.random()]);
//     }

//     const sumOfNumbers = () => {
//         const sumN = numbers.reduce((sum, current) => sum + current, sum);
//         setSum(sumN);
//     }
//     return (
//         <div>
//             <h1> Numbers</h1>
//             <ul> {
//                 numbers.map((n, index) => <li key={index}>{n} </li>)
//             }
//             </ul>
//             <button onClick={push}> Push </button>
//             <button onClick={sumOfNumbers}> sum</button>
//             <p>Total Sum: {sum}</p>
//         </div>
//     )
// }


  //1. initialState
//   const initialstate:StateType=  {
//     numbers:[],
//     sum:0
//   }
  
//   type StateType ={
//   numbers:number[],
//   sum:number,
//   }
  
//   type ActionType={
//   type:string,
//   payload:StateType}
  
//   function reducer(state:StateType, action: ActionType){

  


//    const {type, payload} = action;
//    const{numbers, sum}= state;

//    switch(type){
// case 'NUMBERS': 
// return {...state, numbers: payload.numbers};
// case 'SUM':
//     return {...state, sum:payload.sum};

//    }
  
   
//   }



//    export default function Counter() {

  
//     const [state, dispatch] = useReducer(reducer, initialstate);
//     const{numbers, sum}= state;
  

//   const push = () => {
//     const newN= Math.random;
//         dispatch({type:"NUMBERS", numbers: [...numbers, newN ]});
//     }


//     const sumOfNumbers = () => {
//         const sumN = numbers.reduce((sum, current) => sum + current, sum);
//         dispatch({type: 'SUM', sum: sumN})};
//     }



 


  //2.reducer function
//3.useReduce  ,[state, dispatch]
//  4.call dispatch
 
 





// function reducer(state:StateType, action: ActionType){
// }
//using useReduce



// Define initial state
const initialState = {
  numbers: [],
  sum: 0
};

// Define types for state and action
type StateType = typeof initialState;

type ActionType =
  | { type: 'NUMBERS'; numbers: number[] }
  | { type: 'SUM'; sum: number };

// Define reducer function
function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case 'NUMBERS':
      return { ...state, numbers: action.numbers };
    case 'SUM':
      return { ...state, sum: action.sum };
    default:
      return state;
  }
}

export default function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const { numbers, sum } = state;

  // Define push function
  const push = () => {
    const newNumber = Math.random();
    dispatch({ type: 'NUMBERS', numbers: [...numbers, newNumber] });
  };

  // Define sumOfNumbers function
  const sumOfNumbers = () => {
    const newSum = numbers.reduce((acc, current) => acc + current, 0);
    dispatch({ type: 'SUM', sum: newSum });
  };

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <button onClick={push}>Push</button>
      <button onClick={sumOfNumbers}>Sum</button>
      <p>Total Sum: {sum}</p>
    </div>
  );
}
