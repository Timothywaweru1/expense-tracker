import React from 'react'

const ExpenseForm = () => {
  return (
    <div>
        <h3>Add Expense</h3>
        <p>Enter your details below</p>
        <form>
            <input type='text' placeholder='Enter expense name'/>
            <input type='text' placeholder='Enter expense description'/>
            <input type='text' placeholder='Enter expense category'/>
            <input type='text' placeholder='Enter amount'/>
            <input type='date' placeholder=''/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm