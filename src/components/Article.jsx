import React from "react";

/**
 * Article Component
 * Connected to: Parent (ArticleList.jsx)
 * Props:
 *   - title (string): Post title
 *   - date (string): Post publication date (defaults to "January 1, 1970")
 *   - preview (string): Short snippet/preview text
 */
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;