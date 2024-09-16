import React from 'react'
import './searchCompBtn.css'
const SearchComponent = () => {
  return (
    <div className="searchComponent ">
      <input placeholder="What do you want?" className="customButton light" type="text" />
      <button className="customButton light">Search</button>
    </div>
  )
}

export default SearchComponent
