const BASE_URL = "http://localhost:3001/transactions";

export function getAllTransactions() {
  const request = fetch(`${BASE_URL}/`)
    .then((response) => response.json())
    .then((AllTransactions) => AllTransactions);
  return request;
}

export function getOneTransaction(id) {
  const request = fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((oneTransaction) => oneTransaction)
    .catch((err) => console.log("Error getting one transaction"));
  return request;
}

export function createNewTransaction(transaction) {
    const request = fetch(`${BASE_URL}/`, {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: { "Content-Type": "application/json"}
  })
    .then((response) => response.json())
    .then((newTransactionEnd) => newTransactionEnd)
    .catch((err) => console.log("Error getting New transaction"));
  return request;
}

export function updateTransaction(id, transaction) {
    const request = fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(transaction),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((transactionUpdated) => transactionUpdated)
      .catch((err) => console.log("Error updating"));
      
    return request
    
}

export function deleteTransaction(id) {
    const request = fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((transactionDeleted) => transactionDeleted)
      .catch((error)=> console.log("Error deleting"))
return request
}


