import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    todoList.push(todo)
    setTodo("")
  }

  const deleteTodo = (name) => {
    let todos = todoList.filter(item => item !== name)
    setTodoList(todos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            className="todoInput" 
            type="text" 
            placeholder='todo name' 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}
          />
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {todoList.map((value, index) => {
            return <Todo key={index} name={value} deleteTodo={deleteTodo}></Todo>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
