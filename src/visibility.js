import React from "react";
import { useState } from "react";

export default function ToggleVisibility() {
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      {visibility && <h3>Hello, World!</h3>}
      <h3>Click the button to change the state of the text </h3>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide text" : "Show text"}
      </button>
    </div>
  );
}
