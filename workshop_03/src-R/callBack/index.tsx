import React, { useCallback, useState } from "react";
import Todos from "./Todos";


export default function CallBackHook() {
  
  console.log('inside parent');
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState<string[]>([]);
  //adding useCallback
  const addTodo = useCallback(() => {
    setTodos([...todos, 'New Todo']);

  }, [todos]);

  return (

    <div>

      <p> Count:{count}</p>
      <p> <button onClick={() => setCount(count + 1)}> +1 </button></p>
      <Todos todos={todos} onAddTodo={addTodo} />
    </div>
  )
}


