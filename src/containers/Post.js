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
          {prev && <Link to={`/post/${prev.permalink}`}>{"<"} prev</Link>}{" "}
          {next && <Link to={`/post/${next.permalink}`}>next {">"}</Link>}
        </div>
      </nav>
      <div className="post">
        <img src={`/images/${post.image}`} alt={post.title} />
        <p>
          '{post.title}' {!!post.price && <span>&pound;{post.price}</span>}{" "}
          {!!post.medium && <span>{post.medium}</span>}
        </p>
      </div>
    </div>
  );
}
