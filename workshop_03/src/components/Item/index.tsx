import { ChangeEvent } from 'react'
import Todo from '../../types'
import './index.css'

type props ={
  id:string,
  name:string,
  done:boolean,
  onUpdateTodo:(id:string)=> void,
  onDeleteTodoById:(id: string) => void
}

export default function Item(props:props) {
  const {id, name, done, onUpdateTodo, onDeleteTodoById} =props

  const onChangeCheckBox=(e: ChangeEvent<HTMLInputElement>) =>{
   onUpdateTodo(id)

  }

  const onDeleteItem = () => {
      onDeleteTodoById(id);
  }
  return (
    <li>
      <label>
        <input type="checkbox"  checked={done}  onChange={onChangeCheckBox}/>
        <span>{name}</span>
      </label>
      <button className="btn btn-danger"  onClick={onDeleteItem}>Delete</button>
    </li>
  )
}