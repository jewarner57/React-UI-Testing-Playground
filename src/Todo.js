import React from 'react';

function Todo(props) {
  const { name, deleteTodo } = props

  return (
    <div className="todo">
      {name}
      <button className="delete-todo" onClick={() => deleteTodo(name)}>X</button>
    </div>
  );
}

export default Todo;