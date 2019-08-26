import React, { FunctionComponent } from "react";
import "./Typography.scss";

type TypographyProps = {};
type TypographyComponent = FunctionComponent<TypographyProps>;

export const Typography: TypographyComponent = ({ children }) => {
  return <div className="typography">{children}</div>;
};
