
import React from 'react';
import { useState, ReactNode } from 'react';

type Props = {
  msg?: string,
  count: number,

}

function Son(props: Props) {
  const { msg, count} = props;
  return (
    <div>
      {msg}
      <br />
      This is Son componnent!
      <h4>{count}</h4>
    </div>
  )
}

//parent to child
//1. bind data as customized HTML attribute on the child component
//2.in the child component via props
// React.strictMod is allowing to print the App componenet only one time
function App() {
  const [message, seMessage] = useState('This is from parent');
  const [count, setCount] = useState(0);

  const increment= ()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    setCount(count-1)
  }
  // const getMsg=(msg:string)=>{
  //   setMessage(msg)
  return (
    <div className='App'>
      <Son msg={message}  count={count}/>
      <button onClick={increment}>Increase By One!</button>
      <button onClick={decrement}>decrease By One!</button>

    

    </div>
  )
}
export default App;
