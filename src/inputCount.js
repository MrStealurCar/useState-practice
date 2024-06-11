import React from "react";
import { useState } from "react";

export default function CharCount() {
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div>
      <input value={character} onChange={handleChange} type="text"></input>
      <h3>Current character count: {character.length}</h3>
    </div>
  );
}
