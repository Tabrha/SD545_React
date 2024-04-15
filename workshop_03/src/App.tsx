import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import { useEffect, useState } from 'react';
import Todo from './types';
import './App.css'


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);


  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  }
const updateTodo = (id:string)=>{
  const newTodos = todos.map(todo =>{
    if(todo.id ==id){
      return({...todo, done:!todo.done})
    }else{
      return todo;
    }
  });
  setTodos(newTodos)
}

const deleteTodoById = (id: string) => {
  setTodos(todos.filter(todo => todo.id !== id));
}
  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://localhost:9000/todos');
      const data = await response.json();
      setTodos(data);
      // console.log(data)
    }
    getTodos();
  }, []);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddNewTodo={addNewTodo}/>
        <List todos={todos} onUpdateTodo={updateTodo} onDeleteTodoById={deleteTodoById}/>
        <Footer  todos={todos}/>
      </div>
    </div>
  );
}



export default App;