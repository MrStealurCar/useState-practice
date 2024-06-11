import React from "react";
import { useState } from "react";

export default function MirrorText() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>Type some text into the input box and watch it render below it</h3>
      <input
        type={text}
        value={text}
        onChange={handleChange}
        placeholder="Hello, World!"
      ></input>
      <p>{text}</p>
    </div>
  );
}
