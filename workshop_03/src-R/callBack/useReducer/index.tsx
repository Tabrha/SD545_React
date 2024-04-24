import React, { useState } from 'react'
import { useReducer } from 'react';
import { FormEvent } from 'react'; 

 
//initial state
//reducer function 
//const[state, dispatch]= useRouter(reducer, inital state)



// type StateType= {
//   username:string,
//   password:string,
//   error:string,
//   isLoggedIn:boolean

// }

// type ActionType= {


//   type:string,
//   payload:StateType
// }



// const initialState= {
//   username:'',
//   password:'',
//   error:'',
//   isLoggedIn:false

// }

// function reducer(state:StateType, action:ActionType){

//   const{type,payload}= action;

 


//   switch(type){
//     case 'USERNAME':
//       return {...state, username:payload.username}
//       case 'PASSWORD':
//         return {...state, password:payload.password}
//         case 'ERROR':
//           return {...state, error:payload.error}
//           case 'IsLoggedIn':
//             return {...state, isLoggedIn:payload.isLoggedIn}
//   }
  

// }



// export default function LoginUseState() {

//   const[state, dispatch]= useReducer(reducer, initialState)
//   const{username, password}= state;

// // const [username, setUsername] = useState('');
// // const [password, setPassword] = useState('');
// const [error, setError] = useState('');
// const [isLoggedIn, setIsLoggedIn] = useState(false);





// const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
// e.preventDefault();
// setError('');
// try {
// await new Promise((resolve, reject) => {
// setTimeout(() => {
// if (username === 'user' && password === 'pwd123') {
// resolve('success');
// } else {
// reject('fail');
// }
// }, 1000);
// });
// setIsLoggedIn(true);
// } catch (error) {
// setError('Incorrect username or password!');
// // setUsername();
// // setPassword('');
// }
// };

// return (

// <div className='App'>

// <div className='login-container'>

// {isLoggedIn ? (
// <>
// <h1>Welcome {username}!</h1>
// <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
// </>
// ) : (
// <form className='form' onSubmit={onSubmit}>
// {error && <p className='error'>{error}</p>}
// <p>Please Login!</p>
// <input
// type='text'
// placeholder='username'
// value={username}
// onChange={(e) => dispatch({type:'USERNAME',payload: {...state, username: e.currentTarget.value}})}

// />

// <input
// type='password'
// placeholder='password'
// autoComplete='new-password'
// value={password}
// onChange={(e) => dispatch{type:'PASSWORD', payload:{...state, password:e.currentTarget.value }})}
// />

// <button className='submit' type='submit'>Log In</button>
// </form>
// )}

// </div>

// </div>











//state:current state, give it to reducer to generate new state 
//action :object with two properties , 


// const initialState = 0;
// function reducer(state: number, action: { type: string, data: number }) {
//   console.log(state, action);
  

//   const { type, data } = action;
//   switch (type) {
//     case 'Increment':
//       return state + data;
//     case 'Decrement':
//       return state - data;
//       case 'Reset':
//         return 0;
//     default: return initialState;


//   }

// }


// const initialState =0;

// export default function ReducerHook() {

// const[count, setCount]= useState({count:0})

//   return (

//     <div>

// <h1> count:{count.count} </h1>

// <button onClick={()=>setCount({...count, count: 2})}> +2</button>


//     </div>

//   )
//}




// export default function ReducerHook() {

//   // const [count, setCount] = useState(0)
//   const[count, dispatch]= useReducer(reducer, initialState);

//   return (

//     <div>

//       <h1> count:{count} </h1>

//       <button onClick={() => dispatch({type:"Increment",data:2})}> +2</button>
//       <button onClick={() => dispatch({type:"Decrement", data:6})}> -6</button>

//       <button onClick={()=>dispatch({type:'Reset', data:0})}>Reset </button>

//     </div>

//   )
// }