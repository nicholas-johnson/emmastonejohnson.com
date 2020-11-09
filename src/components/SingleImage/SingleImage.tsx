import React from "react";
import { Painting } from "../../../config/paintings";
import "./SingleImage.scss";

export type HeaderProps = {
  painting: Painting;
};

export const SingleImage = ({ painting }: HeaderProps) => {
  const { src, title, sold, dimensions } = painting;

  return (
    <div className="single_image">
      <img src={src} alt={title} />
      <div className="caption">
        <p>
          <span className="title">&lsquo;{title}&rsquo;</span>{" "}
          <span className="dimensions">{dimensions}</span>{" "}
          <span className="price">
            {sold ? <>Sold</> : null}
          </span>{" "}
        </p>
        <p>
          <span>
            <a className="requestToBuy" href="mailto:emma@emmastonejohnson.com">
              Request to Buy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
