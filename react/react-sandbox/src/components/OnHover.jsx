import { useState } from "react";

const OnHover = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      className="container"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      {hidden ? null : <h1>Hovering</h1>}
    </div>
  );
};

export default OnHover;
