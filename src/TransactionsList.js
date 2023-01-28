import { useEffect, useState } from "react";
import { getAllTransactions } from "./fetch";
import { Link } from "react-router-dom";

import "./TransactionsList.css";

export default function TransactionsList() {
  const selectColorByAmount = (amount) => {
    const red = "#ef4444"
    const green = "#22c55e"
    const neutral = "#000000"

    if (amount < 0) {
      return red;
    }

    if (amount > 1000) {
      return green;
    }

    return neutral;
  };

  const [transactions, setTransactions] = useState([]);

  const bankAccountTotal = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    }

    return acc - transaction.amount;
  }, 0);

  /*
  const incomesArr = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const expensesArr = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const incomesTotal = incomesArr.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);

  const expensesTotal = expensesArr.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0); ///el acumulador "acc " empieza en este ultimo cero.

  const bankAccountTotal = incomesTotal - expensesTotal;
  */

  useEffect(() => {
    getAllTransactions().then((transactionsList) => {
      setTransactions(transactionsList);
    });
  }, []);

  ////////////Ideas: en "new" genero un togel que pregunte al usuario si eso es un ingreso o un egreso. Si el usuario selecciona la casilla entonces se sumara a los valores positivos, podria atrapar los valores + con un estado y los valores negativos con otro estados. al final esos estados se restan o se suman dependiendo.

  return (
    <div className="transactions-list-container">
      <header>
        <h1>
          {" "}
          Bank Account Total:{" "}
          <span style={{ color: selectColorByAmount(bankAccountTotal) }}>
            ${bankAccountTotal}
          </span>
        </h1>
      </header>

      <section className="transactions-list">
        {transactions.map(
          (
            transaction,
            id ///OJO VER COMO SE GENERA EL ID: el segundo valor dentro de la cal back function en map es el index.
          ) => (
            <div className="transaction-card" key={transaction.item_name}>
              <Link to={`/transactions/${id}`}>
                <span> {transaction.item_name} </span>
              </Link>
              <span> {transaction.date} </span>
              <span> ${transaction.amount} </span>
            </div>
          )
        )}
      </section>
    </div>
  );
}
