import React from "react";
import { useRouteData } from "react-static";

import Sidebar from "../components/Sidebar/Sidebar";
import PostList from "../components/PostList/PostList";
import "./Home.scss";

export default function Home() {
  const { posts } = useRouteData();
  return (
    <div className="index-page">
      <Sidebar />
      <PostList posts={posts} />
    </div>
  );
}
