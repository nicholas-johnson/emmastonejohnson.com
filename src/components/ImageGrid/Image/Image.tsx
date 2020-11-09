import React from "react";

import "./Image.scss";

export type ImageProps = {
  src: string;
  price: number;
  title: string;
  medium: string;
  dimensions: string;
  permalink: string;
  sold: boolean;
};

const Image = ({ src, price, title, dimensions, sold }: ImageProps) => (
  <div className="image">
    <div className="imageContainer">
      <img src={src} alt={title} />
    </div>
    <p className="small">
      <span className="title">&lsquo;{title}&rsquo;</span>{" "}
      <span className="dimensions">{dimensions}</span>{" "}
      <span className="price">{sold ? <>Sold</> : null}</span>{" "}
    </p>
  </div>
);

export { Image };
