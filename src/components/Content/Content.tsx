import React, { FunctionComponent } from "react";

import "./Content.scss";

export const Content: FunctionComponent = ({ children }) => (
  <div className="content">{children}</div>
);
