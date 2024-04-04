
import React, {useState } from 'react';
function App(){
    let [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count+=1)
    }
    const decrement = ()=>{
        setCount(count-=1)
    }
    return (
        <div>   
        <h2>counter: {count} </h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App;