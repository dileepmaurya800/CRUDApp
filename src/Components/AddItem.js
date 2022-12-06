import React, { useState } from "react";

function AddItem({ addItem }) {
  const [item, setItem] = useState("");

  function handleInput(e) {
    setItem(e.target.value);
  }
  function handleSubmition(e) {
    e.preventDefault();
    addItem(item);
    setItem("");
  }
  return (
    <form>
      <input value={item} type="text" onChange={handleInput} />
      <button type="submit" onClick={handleSubmition}>
        Submit
      </button>
    </form>
  );
}

export default AddItem;
