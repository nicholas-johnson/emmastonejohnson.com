import React from "react";
import { Link } from "@reach/router";
import "./Header.scss";

export type HeaderProps = {
  title: string;
};

export const Header = () => (
  <header className="header">
    <h1 className="biggest">
      <Link to="/">EMMA STONE-JOHNSON</Link>
    </h1>
  </header>
);
