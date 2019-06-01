import React from "react";
import { useRouteData } from "react-static";

import { Link } from "components/Router";

import "./Post.scss";

export default function Post() {
  const { post, prev, next } = useRouteData();
  return (
    <div className="post_page">
      <nav>
        <div className="back">
          <Link to="/">{"<"} Back</Link>
        </div>
        <div className="next-prev">
          {prev && <Link to={`/post/${prev.permalink}`}>{"<"} prev</Link>}
          {next && <Link to={`/post/${next.permalink}`}>next {">"}</Link>}
        </div>
      </nav>
      <div className="post">
        <img src={`/images/${post.image}`} alt={post.title} />

        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
