import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add a new expense
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Delete an expense by ID
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // Filter expenses by search term
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Expense Tracker</h1>
        <p>
          Start tracking your money. Record, <br />
           and view your expenses easily.
        </p>
      </header>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Left Panel: Add Expense */}
        <div className="left-panel">
          <h2>Add Expense</h2>
          <p>Fill in the details below</p>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        {/* Right Panel: Search & Table */}
        <div className="right-panel">
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
