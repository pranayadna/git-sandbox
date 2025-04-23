import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("useEffect hook called once");
  }, []);

  return <h1>BasicEffect</h1>;
};

export default BasicEffect;
