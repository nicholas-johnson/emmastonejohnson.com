import React from "react";
import { Link } from "@reach/router";
import "./Menu.scss";

export const Menu = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/paintings">Paintings</Link>
        </li>
        {/* <li>
        <Link to="/cv">CV</Link>
      </li> */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
