import React from 'react'

export default function SearchBar({setQuery}) {
  // console.log("rendering SearchBar from SearchBar.jsx");
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search for a country... " onChange={(e)=>{
        setQuery(e.target.value.toLowerCase())
        }} />
    </div>
  )
}
