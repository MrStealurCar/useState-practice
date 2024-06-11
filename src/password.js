import React from "react";
import { useState } from "react";

export default function PasswordConfirmation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmation = (event) => {
    setConfirmPassword(event.target.value);
  };

  const matchingPasswords = password === confirmPassword;

  return (
    <div>
      <label>Password: </label>
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password"
      ></input>
      <input
        type="password"
        value={confirmPassword}
        onChange={handlePasswordConfirmation}
        placeholder="Confirm Password"
      ></input>
      {matchingPasswords ? (
        <h3>Passwords match</h3>
      ) : (
        <h3>Passwords do not match</h3>
      )}
    </div>
  );
}
