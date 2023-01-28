import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar"
import TransactionsList from "./TransactionsList";
import New from "./New"
import ShowOne from "./ShowOne"
import Edit from "./Edit"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<TransactionsList />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:id" element={<ShowOne />} />
          <Route path="/transactions/:id/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
