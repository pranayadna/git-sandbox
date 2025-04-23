import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      // setShoppingItems([...shoppingItems, inputValue]);
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <h1>TodoList</h1>
      {todos.map((todo, index) => (
        <ul key={index}>
          <li>{todo}</li>
        </ul>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoList;
