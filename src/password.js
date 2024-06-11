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

  const passwordsNotEmpty = password !== "" && confirmPassword !== "";
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

      {passwordsNotEmpty && (
        <h3>
          {matchingPasswords ? "Passwords match" : "Passwords do not match"}
        </h3>
      )}
    </div>
  );
}
