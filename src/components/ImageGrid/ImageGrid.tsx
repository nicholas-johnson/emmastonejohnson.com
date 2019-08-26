import React from "react";
import { Link } from "@reach/router";
import { Image, ImageProps } from "./Image/Image";

import "./ImageGrid.scss";

export type ImageGridProps = {
  images: ImageProps[];
};

const ImageGrid = ({ images }: ImageGridProps) => (
  <div className="image_grid">
    <ul>
      {images.map(image => (
        <li key={image.permalink}>
          <Link to={`/post/${image.permalink}/`}>
            <Image {...image} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export { ImageGrid };
