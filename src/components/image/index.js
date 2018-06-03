import React from "react";

import styles from "./image.module.scss"

export const Image = ({src, alt}) => (
  <div className={styles.image}>
    <img src={src} title={alt}/>
    <p>{alt}</p>
  </div>
);
