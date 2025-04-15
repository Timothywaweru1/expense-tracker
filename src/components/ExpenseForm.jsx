import React from 'react'

const ExpenseForm = () => {
  return (
    <div className='form'>
        <h3>Add Expense</h3>
        <p>Enter your details below</p>
        <form>
            <input type='text' placeholder='Enter expense name' required/>
            <input type='text' placeholder='Enter expense description'required/>
            <input type='text' placeholder='Enter expense category'required/>
            <input type='text' placeholder='Enter amount' required/>
            <input type='date' placeholder='' required/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ExpenseForm