import React from "react";

type XProps = {
  onClick: () => void;
};

export const X = ({ onClick }: XProps) => (
  <div className="x" onClick={onClick}>
    &#x2573;
  </div>
);
