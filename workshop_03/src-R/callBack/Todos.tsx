import React from 'react'


type Props = {
    onAddTodo: () => void;
    todos: string[]
}

export default function Todos({ todos, onAddTodo }: Props) {

console.log('re-render todos')
    return (

        <div>

            {todos.map((todo, index) => <p key={index}>{todo} </p>)}
            <button onClick={onAddTodo}> Add To Do </button>

        </div>
    )
}
