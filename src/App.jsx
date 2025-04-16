import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import SearchBar from './components/SearchBar'
import ExpenseTable from './components/ExpenseTable'

const App = () => {
  return (
    <div className='details'>
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life.Record,catalyze and analyze your spending </p>
      <div className='right'>
         <ExpenseForm />
         <ExpenseTable onAddNewExpense={}/>
      </div>
    </div>
  )
}

export default App