import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getOneTransaction, updateTransaction } from "./fetch";

import "./UpsertForm.css"



export default function Edit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [transactionToEdit, setTransactionToEdit] = useState({
      date: "",
      item_name: "",
      amount: "",
      from: "",
      category: "",
    });

    useEffect(() => {
        getOneTransaction(id).then(
          (transactions) => setTransactionToEdit(transactions)
        );
    }, [id])

    function handleTextChange(event) {
        setTransactionToEdit({
        ...transactionToEdit,
        [event.target.id]: event.target.value, //quiere decir que si activamos la funcion handle text change (se activa cuando se clickea el check box) esta cambiara al valor contrario del actual
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        updateTransaction(id, transactionToEdit).then((transactionUpdated) => {
          navigate(`/transactions`);
        });
  }
    return (
    <div>
      <header className="upsert-form-header">
        <h1>Edit transaction</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            value={transactionToEdit.date}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
            <label htmlFor="item_name">Name</label>
            <input
              type="text"
              id="item_name"
              value={transactionToEdit.item_name}
              onChange={handleTextChange}
            />
        </div>

        <div className="form-field">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={transactionToEdit.amount}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            value={transactionToEdit.from}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={transactionToEdit.category}
            onChange={handleTextChange}
          />
        </div>
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}