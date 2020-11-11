import React, { useState, useContext } from "react";
import { TransactionContext } from "./Context";

export const Transaction = () => {
  let { transaction, addTransaction } = useContext(TransactionContext);
  const [newDesc, setDesc] = useState("");
  const [newAmount, setAmount] = useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    addTransaction({
      desc: newDesc,
      amount: Number(newAmount),
    });
  };
  return (
    <div>
      <h4>History</h4>
      <hr />
      <ul className="listitem">
        {transaction.map((transObj, ind) => {
          return (
            <li key={ind}>
              {transObj.desc} <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <h4>Add new transaction</h4>
      <hr />
      <form onSubmit={handleChange}>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={(ev) => {
              setDesc(ev.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            onChange={(ev) => {
              setAmount(ev.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
