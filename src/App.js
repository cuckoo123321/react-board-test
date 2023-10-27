import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import {useState, useRef} from 'react'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, content:'abc', isDone: true},
    {id: 2, content:'no done', isDone: false}
  ])
  
  const [value, setValue] = useState('')
  const id = useRef(3)

  const handleButtonClick = () => {
    setTodos([{
      id: id.current,
      content: value
    }, ...todos])
    setValue('')
    id.current++
  }

  const handleInputChange = (e)=> {
    setValue(e.target.value)
  }

  const handleDeleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if(todo.id !==id) return todo
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

 return(
  <div className="App">
    <input type='text' placeholder='請輸入 todo' value={value} onChange={handleInputChange}/>
    <button onClick={handleButtonClick}>Add Todo</button>
    {
      todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleIsDone={handleToggleIsDone}/>)
    }
  </div>
 )
}

export default App;
