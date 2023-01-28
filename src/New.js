import { createNewTransaction } from "./fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./UpsertForm.css";

export default function New() {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    item_name: "",
    amount: "",
    from: "",
    category: "",
    type: "income",
  });

  function handleInputChange(event) {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formattedTransaction = {
      ...newTransaction,
      amount: Number(newTransaction.amount),
    };

    createNewTransaction(formattedTransaction).then((newTransactionEnd) => {
      navigate("/transactions");
    });
  }

  return (
    <div>
      <header className="upsert-form-header">
        <h1>Create new transaction</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            value={newTransaction.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="item_name">Name</label>
          <input
            type="text"
            id="item_name"
            value={newTransaction.item_name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={newTransaction.amount}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            value={newTransaction.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={newTransaction.category}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={newTransaction.type}
            onChange={handleInputChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
