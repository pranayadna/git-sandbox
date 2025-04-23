const Person = ({ name, age }) => {
  console.log(name, age);

  return (
    <>
      <h1>Person</h1>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </>
  );
};

export default Person;
