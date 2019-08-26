import React from "react";
import { Link } from "components/Router";

import Fade from "react-reveal/Fade";

import "./PostList.scss";

const PostList = ({ posts }) => (
  <div className="post-list">
    <ul>
      {posts.map((post, i) => (
        <li key={post.permalink}>
          <Link to={`/post/${post.permalink}/`}>
            {i <= 1 && <img src={`images/${post.image}`} alt={post.title} />}
            {i > 1 && (
              <Fade bottom>
                <img src={`images/${post.image}`} alt={post.title} />
              </Fade>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
