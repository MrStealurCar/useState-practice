import React from "react";
import { useState } from "react";

export default function NameSetter() {
  const intialName = "Spongebob";
  const names = [
    "Squidward",
    "Mr. Krabs",
    "Larry the Lobster",
    "Plankton",
    "Gary",
    "Sandy Cheeks",
    "Pearl",
    "Mrs. Puff",
  ];

  let [name, setName] = useState(intialName);

  const bestCharacter = () => {
    setName("Patrick Star");
  };

  const reset = () => {
    setName(intialName);
  };

  const randomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>
        Click the button to change the name to different Spongebob characters
      </h3>
      <button onClick={randomName}>Random character</button>
      <button onClick={bestCharacter}>The best character</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
