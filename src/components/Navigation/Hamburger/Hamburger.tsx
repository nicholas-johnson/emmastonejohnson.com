import React from "react";

import "./Hamburger.scss";

export type HamburgerProps = {
  onClick: () => void;
  isOpen: boolean;
  color: string;
  thickness: number;
  width: number;
  height: number;
};

export const Hamburger = ({
  onClick,
  isOpen,
  color,
  thickness,
  width,
  height
}: HamburgerProps) => {
  const barStyles = { background: color, height: `${thickness}px` };
  const hamburgerStyles = {
    width: `${width}px`,
    height: `${height}px`
  };

  return (
    <div
      className={["hamburger", isOpen ? "open" : ""].join(" ")}
      style={hamburgerStyles}
      onClick={onClick}
    >
      <span style={barStyles} />
      <span style={barStyles} />
      <span style={barStyles} />
    </div>
  );
};
