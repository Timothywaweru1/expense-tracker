import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <input type='search' placeholder='Search Expenses' className='search' value={props.search} onChange={(e) => {
        props.onSearch(e.target.value)
      }}/>
    </div>
  )
}

export default SearchBar