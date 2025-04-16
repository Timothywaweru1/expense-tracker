import React, { useState } from 'react'
import SearchBar from './SearchBar'

const ExpenseTable = (props) => {



  return (
    
    <div className='juicy-part'>
        <div className=''>
           <SearchBar />
        </div>
        <div className='info'>
        <table>
            <thead className='head'>
                <tr className='row'>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.expenses.map((expense) => {
                        return (
                            <tr key={expense.id}> 
                            <td>{expense.name}</td>
                            <td>{expense.description}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button className='delete-btn' onClick={() => {
                                    props.onDelete(expense.id)
                                }}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
              
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default ExpenseTable