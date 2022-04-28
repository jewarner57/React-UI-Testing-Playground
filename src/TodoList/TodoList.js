import { useState } from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

function TodoList() {

  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (todo) {
      todoList.push(todo)
      setTodo("")
    }
  }

  const deleteTodo = (name) => {
    let todos = todoList.filter(item => item !== name)
    setTodoList(todos)
  }

  return (
    <div className="TodoList">
      <header className="TodoList-header">
        <h1>ToDo List</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="todoInput"
            type="text"
            placeholder='Todo name'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <div className="todo-container">
          {todoList.map((value, index) => {
            return <Todo key={index} name={value} deleteTodo={deleteTodo}></Todo>
          })}
        </div>
      </header>
    </div>
  );
}

export default TodoList;
