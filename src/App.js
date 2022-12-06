import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import AddItem from "./Components/AddItem";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const storeItems = JSON.parse(localStorage.getItem("Local")) || [];
    setItems(storeItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("Local", JSON.stringify(items));
  }, [items]);

  const addItem = (newInput) => {
    setItems([{ task: newInput, id: uuidv4() }, ...items]);
  };
  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updateItems = (index) => {
    const newTodoItems = [...items];
    const item = newTodoItems[index];
    let updatedVal = prompt("Enter updated value", item.task);
    let completeObj = { task: updatedVal, id: uuidv4() };
    newTodoItems.splice(index, 1, completeObj);
    if (updatedVal === "" || updatedVal === null) return;
    else item.task = updatedVal;
    setItems(newTodoItems);
  };

  return (
    <div className="app">
      <h2> CURD APP </h2>
      <AddItem addItem={addItem} />
      {items.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteItem={deleteItem}
          updateItems={updateItems}
        />
      ))}
    </div>
  );
}
export default App;
