import React from 'react'
import './searchCompBtn.css'
const SearchComponent = () => {
  return (
    <div className="searchComponent ">
      <input placeholder="What do you want?" className="button-30 light" type="text" />
      <button className="button-30 light">Search</button>
    </div>
  )
}

export default SearchComponent
