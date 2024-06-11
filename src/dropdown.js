import React from "react";
import { useState } from "react";

export default function DropdownBar() {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleEvent = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Select a Pizza Topping</h2>
      <select value={selectedValue} onChange={handleEvent}>
        <option value="">Select a pizza topping</option>
        <option value="Pepperoni">Pepperoni</option>
        <option value="Onions">Onions</option>
        <option value="Green Peppers">Green Peppers</option>
      </select>
      {selectedValue ? <h4>You have selected: {selectedValue}</h4> : null}
    </div>
  );
}
