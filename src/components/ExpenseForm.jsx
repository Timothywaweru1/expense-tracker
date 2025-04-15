import React from 'react'

const ExpenseForm = () => {
  return (
    <div className='form'>
        <h3>Add Expense</h3>
        <p>Enter your details below</p>
        <form>
            <input type='text' placeholder='Enter expense name' required/>
            <br />
            <input type='text' placeholder='Enter expense description'required/>
            <br />
            <input type='text' placeholder='Enter expense category'required/>
            <br />
            <input type='text' placeholder='Enter amount' required/>
            <br />
            <input type='date' placeholder='' required/>
            <br />
            <button>Submit</button>
        </form>
        
    </div>
  )
}

export default ExpenseForm