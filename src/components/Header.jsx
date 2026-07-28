import React from "react";

/**
 * Header Component
 * Connected to: Parent (App.jsx)
 * Props: name (string) - The blog title
 */
function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

export default Header;