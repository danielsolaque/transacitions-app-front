// import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { getOneTransaction, deleteTransaction } from "./fetch";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./ShowOne.css";

export default function ShowOne() {
  const { id } = useParams();
  const navigate = useNavigate();

  // const navigate = useNavigate()
  const [oneTransactionState, setOneTransactionState] = useState({});
  console.log(oneTransactionState);

  useEffect(() => {
    getOneTransaction(id).then((thisOneTransaction) => {
      setOneTransactionState(thisOneTransaction);
      console.log(thisOneTransaction);
    });
  }, [id]);

  function deleteNow(id) {
    deleteTransaction(id).then((transactionDeleted) => {
      navigate(`/transactions`);
    });
  }

  return (
    <div className="transaction-detail">
      <header>
        <h1>Transaction detail</h1>
      </header>

      <div className="transaction-detail-card">
        <p>
          <b>Date:</b> {oneTransactionState.date}.
        </p>
        <p>
          <b>Name:</b> {oneTransactionState.item_name}.
        </p>
        <p>
          <b>Amount:</b> {oneTransactionState.amount}.
        </p>
        <p>
          <b>From:</b> {oneTransactionState.from}.
        </p>
        <p>
          <b>Category:</b> {oneTransactionState.category}.
        </p>
        <br />

        <div className="transaction-detail-buttons">
          <Link
            className="transaction-detail-button edit-bg"
            to={`/transactions/${id}/edit`}
          >
            Edit
          </Link>
          <br />
          <button className="transaction-detail-button delete-bg" onClick={() => deleteNow(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
