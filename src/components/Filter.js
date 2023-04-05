import React from "react";

function Filter({ onCategoryChange }) {

  function handleChange(e) {
    onCategoryChange(e)

  }
  return (
    <select name="filter" onChange={(e) => handleChange(e)} >
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>)
}

export default Filter