const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
  };

  //   console.log(Object.entries(product));

  return (
    <>
      <h2>Product Info</h2>
      <ul>
        {Object.entries(product).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>
            &nbsp;
            {value}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductInfo;
