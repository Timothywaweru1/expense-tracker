import React from 'react'

const ExpenseTable = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
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
  )
}

export default ExpenseTable