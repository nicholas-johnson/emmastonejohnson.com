import React from "react";
import { Link } from "@reach/router";
import "./Header.scss";

export type HeaderProps = {
  title: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => (
  <header>
    <h1 className="biggest">
      <Link to="/">{title}</Link>
    </h1>
  </header>
);
