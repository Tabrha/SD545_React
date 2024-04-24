import React from 'react';
import logo from './logo.svg';
import './App.css';
import CallBackHook from './callBack';
import MemoHook from './memo';
// import ReducerHook from './callBack/useReducer';
import Counter from './counterUseState';

function App() {



  return (
    <div className="App">

      {/* <CallBackHook /> */}

  {/* <MemoHook/> */}

{/* <ReducerHook/> */}

<Counter/>

    </div>
  );
}

export default App;
