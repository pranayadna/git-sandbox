import { useState } from "react";

// { name: "Apples", quantity: 6 },
// { name: "Milk", quantity: "2 liters" },
// { name: "Rice", quantity: "1 kg" },

const ShoppingList = () => {
  const [inputValue, setInputValue] = useState({ name: "", quantity: "" });
  const [shoppingItems, setShoppingItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (inputValue.trim()) {
    setShoppingItems([...shoppingItems, inputValue]);
    setInputValue({ name: "", quantity: "" });
    // }
  };

  return (
    <>
      <h1>ShoppingList</h1>

      {shoppingItems.map((item, index) => (
        // (item.map(key, value) =>
        <ul key={index}>
          <li>
            <p> Name: {item.name}</p>
            <p> Quantity: {item.quantity}</p>
          </li>
        </ul>
        // <p>Name: item.name</p>
      ))}

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          placeholder="Add name"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={inputValue.quantity}
          placeholder="Add quantity"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ShoppingList;
