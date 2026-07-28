import React from "react";

/**
 * About Component
 * Connected to: Parent (App.jsx)
 * Props: 
 *   - image (string): Logo image URL (defaults to placeholder)
 *   - about (string): Blog description text
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;