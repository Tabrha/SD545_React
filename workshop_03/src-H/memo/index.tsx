import { link } from 'fs';
import React, { useState, useMemo, MouseEvent } from 'react'



// function expensiveFunction(num:number){
//     console.log('expensive function');
//     for(let i=0; i<100000;i++){
//         num+=1;
//     }
//     return num;

// }

// export default function MemoHook() {

//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState<string[]>(['eat', 'play']);

//     const addTodo = () => {
//         setTodos([...todos, 'new todo']);
//     }
//     const incrementBy1 = () => {
//         setCount(count + 1);
//     }

//         const result = useMemo(()=>
//             expensiveFunction(count), [count]);
//         console.log('result');
//     return (
//         <div>

//             <p> Count:{count}</p>
//             <p><button onClick={incrementBy1}>+1 </button> </p>
//             <hr />

//             <ul>

//                 {todos.map((todo, index) => <li key={index}>{todo} </li>)}
//             </ul>
//             <button onClick={addTodo}> Add To Do</button>
//             <hr /> 
//             <p> result : {result}</p>




//         </div>
//     )
// }

export default function MemoHook() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);

    const calculation = useMemo(()=>{ 
         return expensiveCalculation(count)}
      ,[count]);

    
        const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {

      setTodos((t) => [...t, "New Todo"]);

    };


    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}

                <button onClick={addTodo}>Add Todo</button>
                
            </div>

            <hr />

            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};


const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
}

