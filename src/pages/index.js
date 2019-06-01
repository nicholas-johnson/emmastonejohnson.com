import React from "react";
import { useRouteData } from "react-static";

import { Link } from "components/Router";

import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  const { posts } = useRouteData();
  return (
    <div>
      <Sidebar />
      <ul>
        {posts.map(post => (
          <li key={post.permalink}>
            <Link to={`/post/${post.permalink}/`}>
              {!!post.image && (
                <img src={`images/${post.image}`} alt={post.title} />
              )}
            </Link>
            <Link to={`/post/${post.permalink}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
