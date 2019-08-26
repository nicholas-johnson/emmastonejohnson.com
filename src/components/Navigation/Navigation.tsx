import React, { useState } from "react";
import { hamburgerProps } from "../Component.config";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import X from "./X";

import "./Navigation.scss";

export const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={["navigation", open ? "navigation-is-open" : ""].join(" ")}>
      <div className="controls">
        {!isOpen && (
          <Hamburger
            {...hamburgerProps}
            isOpen={false}
            onClick={() => setOpen(true)}
          />
        )}
        {!!isOpen && <X onClick={() => setOpen(false)} />}
      </div>
      <div className="dropdown">{!!isOpen && <Menu />}</div>
    </div>
  );
};
