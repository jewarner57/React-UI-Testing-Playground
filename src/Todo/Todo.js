import React from 'react';
import "./Todo.css"

function Todo(props) {
  const { name, deleteTodo } = props

  return (
    <div className="todo">
      <p>{name}</p>
      <button className="delete-todo" onClick={() => deleteTodo(name)}>X</button>
    </div>
  );
}

export default Todo;