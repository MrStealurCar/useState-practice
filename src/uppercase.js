import React from "react";
import { useState } from "react";
export default function UppercaseConverter() {
  const [uppercase, setUppercase] = useState("");

  const handleEvent = (event) => {
    setUppercase(event.target.value.toUpperCase());
  };

  return (
    <div>
      <h3>Type something in the input field to get yelled at</h3>
      <input onChange={handleEvent} type="text"></input>
      <p>{uppercase}</p>
    </div>
  );
}
