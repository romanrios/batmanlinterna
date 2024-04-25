import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("cambió el contador");
  }, [count]);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <button onClick={increaseCounter}>Increase value</button>
      <p>Número: {count}</p>
      <button onClick={decreaseCounter}>Decrease value</button>
    </>
  );
};
