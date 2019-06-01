import React from "react";
import { useRouteData } from "react-static";

import { Link } from "components/Router";

import "./Post.scss";

export default function Post() {
  const { post } = useRouteData();
  return (
    <div className="post_page">
      <nav>
        <Link to="/">{"<"} Back</Link>
      </nav>
      <div className="post">
        <img src={`/images/${post.image}`} alt={post.title} />

        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
