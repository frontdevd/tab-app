import React from 'react'
import InputBase from '@material-ui/core/InputBase'

const Search = ({handleSearch}) => {
  return (
    <div className='search-bar'>
      <InputBase placeholder='Search in body...' onChange={handleSearch}/>
    </div>
  )
}

export default Search