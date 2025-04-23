const Greeting = ({ timeOfDay }) => {
  return (
    <>
      <h1>Greeting</h1>
      {timeOfDay === "morning" ? <p>Good morning!</p> : <p>Good afternoon!</p>}
    </>
  );
};

export default Greeting;
