import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayname);
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Display Name:</span>
          <input
            required
            type="text"
            value={displayname}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </label>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
}
