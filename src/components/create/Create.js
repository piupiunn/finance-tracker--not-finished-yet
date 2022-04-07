import React, { useState } from "react";
import "./Create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("music");
  const [nextBill, setNextbill] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Name: </span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span> Description: </span>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span> Category: </span>
          <select
            required
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="music">Music</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="food-beverages">Food & Beverages</option>
            <option value="health">Health</option>
            <option value="productivity">Productivity</option>
            <option value="banking">Banking</option>
            <option value="transport">Transport</option>
            <option value="education">Education</option>
            <option value="insurance">Insurance</option>
          </select>
        </label>
        <label>
          <span> Next Bill: </span>
          <input
            required
            type="date"
            value={nextBill}
            onChange={(e) => setNextbill(e.target.value)}
          />
        </label>

        <label>
          <span>Amount: </span>
          <input
            required
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
