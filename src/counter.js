import React from "react";
import { useState } from "react";

export default function Counter() {
  const initialValue = 0;
  const maxValue = 50;
  const minValue = -50;
  const [number, setNumber] = useState(initialValue);

  const increase = () => {
    if (number < maxValue) {
      setNumber(number + 1);
    } else {
      alert(`Number cannot exceed ${maxValue}`);
    }
  };

  const decrease = () => {
    if (number > minValue) {
      setNumber(number - 1);
    } else {
      alert(`Number cannot go below ${minValue}`);
    }
  };

  const reset = () => {
    if (number === initialValue) {
      alert("Number is already at 0");
    } else {
      setNumber(initialValue);
    }
  };

  return (
    <div>
      <h2>Click the buttons to change the number</h2>
      <h3>The current number is: {number}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
