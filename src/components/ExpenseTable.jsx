import React from 'react'
import SearchBar from './SearchBar'

const ExpenseTable = () => {
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
                <tr> 
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button className='delete-btn'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default ExpenseTable