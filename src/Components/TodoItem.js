import React from "react";

function TodoItem({ todo, index, deleteItem, updateItems }) {
  return (
    <div className="todo-list">
      <ul>
        <li>{todo.task}</li>
      </ul>

      <div className="btns">
        <button onClick={() => updateItems(index)}>Update</button>
        <button onClick={() => deleteItem(index)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
