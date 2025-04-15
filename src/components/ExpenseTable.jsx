import React from 'react'
import SearchBar from './SearchBar'

const ExpenseTable = () => {
  return (
    
    <div className='juicy-part'>
        <SearchBar />
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
                <tr> {/*data will be displayed here*/}
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  )
}

export default ExpenseTable