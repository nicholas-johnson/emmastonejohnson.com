import React from "react";
import { Link } from "components/Router";

import "./PostList.scss";

const PostList = ({ posts }) => (
  <div className="post-list">
    <ul>
      {posts.map(post => (
        <li key={post.permalink}>
          <Link to={`/post/${post.permalink}/`}>
            {!!post.image && (
              <img src={`images/${post.image}`} alt={post.title} />
            )}
          </Link>
          <Link to={`/post/${post.permalink}/`}>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
