import React from "react";
import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [favFruit, setFavFruit] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFruitChange = (event) => {
    setFavFruit(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          value={favFruit}
          onChange={handleFruitChange}
          placeholder="Favorite Fruit"
        ></input>
        <button value={submitted} onSubmit={handleSubmit}>
          Submit Form
        </button>
        {name ? <h3>Name: {name}</h3> : null}
        {favFruit ? <h3>Favorite Fruit: {favFruit}</h3> : null}
      </form>
    </div>
  );
}
