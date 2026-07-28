import React from "react";
import Article from "./Article";

/**
 * ArticleList Component
 * Connected to: Parent (App.jsx) -> Children (Article.jsx)
 * Props: posts (array): Array of blog post objects
 */
function ArticleList({ posts }) {
  const articleElements = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articleElements}</main>;
}

export default ArticleList;