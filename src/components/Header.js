import React from "react";



function Header({ onDarkModeClick, onDarkDisplay }) {


  function handleClick() {
    onDarkModeClick()
  }

  return (
    <header onClick={handleClick}>
      <h2>Shopster</h2>
      <button>
        {onDarkDisplay ? "Light" : "Dark"} Mode
      </button>
    </header>)
}

export default Header