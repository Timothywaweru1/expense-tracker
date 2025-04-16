import React, { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

const App = () => {
  const [expenses,setExpenses] = useState([])
  const [search,setSearch] = useState("")


  function manageExpenses (expense) {
    setExpenses(expenses.concat(expense))
  }

  const deleteItem = (id) => {
    let newExpenses = expenses.filter((expense) => {
      return expense.id !== id
    })
    setExpenses(newExpenses)
  }


  let chosenItems = expenses.filter((expense) => {
    return expense.name.includes(search.toLowerCase())
  })
  
  return (
    <div className='details'>
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life.Record,<br />
        catalyze and analyze your spending </p>
      <div className='right'>
         <ExpenseForm onAddExpense = {manageExpenses}/>
         <ExpenseTable expenses = {chosenItems} onDelete = {deleteItem} search = {search} onSearch = {setSearch}/>  
      </div>
    </div>
  )
}

export default App