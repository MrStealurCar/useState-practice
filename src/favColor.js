import React from "react";
import { useState } from "react";

export default function FavoriteColor() {
  const [favColor, setFavColor] = useState(null);

  const handleChange = (event) => {
    setFavColor(event.target.value);
  };

  return (
    <div>
      <h2>What is your favorite color?</h2>
      <select value={favColor} onChange={handleChange}>
        <option value="">Select a color</option>
        <option value="Blue">Blue</option>
        <option value="Black">Black</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Pink">Pink</option>
        <option value="Yellow">Yellow</option>
      </select>
      {favColor ? <h3>Your favorite color is: {favColor} </h3> : null}
    </div>
  );
}
