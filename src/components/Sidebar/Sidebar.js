import React from "react";

import { Link } from "components/Router";
import "./Sidebar.scss";

const Sidebar = () => (
  <nav className="sidebar">
    <h1>
      <Link to="/">Emma Stone Johnson</Link>
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
