const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <>
      <h2>ProductList</h2>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>
            Name: {name}, Price: {price}
          </li>
        </ul>
      ))}
    </>
  );
};

export default ProductList;
