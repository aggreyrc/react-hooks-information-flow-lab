import React from "react";

function Header({onDarkModeClick, isDarkMode}) {
  return (
    <div>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>
      </header>
    </div>
  );
};

export default Header;
