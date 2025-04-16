import React, { useState } from 'react'

const ExpenseForm = () => {
    const [expenseName,setExpenseName] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")
    const [amount,setAmount] = useState("")
    const [date,setDate] = useState("")

  return (
    <div className='form'>
        <h3>Add Expense</h3>
        <p>Enter your details below</p>
        <form onSubmit={(props,e) => {
            e.preventDefault()
            const newExpense = {
                id: Date.now(),
                expensename:expenseName,
                description:description,
                category:category,
                amount:parseFloat(amount),
                date:date
            }
            props.onAddNewExpense(newExpense)
            setAmount("")
            setDescription("")
            setDate("")
            setCategory("")
            setExpenseName("")

        }}>
            <input type='text' placeholder='Enter expense name' value={expenseName} required onChange={(e) => {
                setExpenseName(e.target.value)
            }} />
            <br />
            <input type='text' placeholder='Enter expense description' value={description}required onChange={(e) => {
                setDescription(e.target.value)
            }}/>
            <br />
            <input type='text' placeholder='Enter expense category'value={category}required onChange={(e) => {
                setCategory(e.target.value)
            }}/>
            <br />
            <input type='text' placeholder='Enter amount' value={amount}required onChange={(e) => {
                setAmount(e.target.value)
            }}/>
            <br />
            <input type='date' placeholder='' value={date}required onChange={(e) => {
                setDate(e.target.value)
            }}/>
            <br />
            <button>Submit</button>
        </form>
        
    </div>
  )
}

export default ExpenseForm