import React from "react";
import { useRouteData } from "react-static";

import { Link } from "components/Router";

import Sidebar from "../components/Sidebar/Sidebar";

export default function Blog() {
  const { posts } = useRouteData();
  return (
    <div>
      <Sidebar />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}/`}>
              {!!post.image && <img src={post.image} alt={post.title} />}
            </Link>
            <Link to={`/post/${post.id}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
