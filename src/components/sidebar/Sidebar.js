import React from "react";

import { Link } from "components/Router";
import "./Sidebar.css";

const Sidebar = () => (
  <nav className="sidebar">
    <h1>
      <Link to="/">Emma Stone Johnson</Link>
    </h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Sidebar;
