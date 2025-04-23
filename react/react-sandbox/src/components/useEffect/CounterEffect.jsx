import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [titleCounter, setTitleCounter] = useState(0);

  useEffect(() => {
    document.title = `Title counting ${titleCounter}`;
  }, [titleCounter]);

  return (
    <>
      <h1>CounterEffect</h1>
      <button onClick={() => setTitleCounter(titleCounter + 1)}>
        Title Counter
      </button>
    </>
  );
};

export default CounterEffect;
