import React from "react";
import { PHOTO_POST } from "../../api";
import styles from "./FeedPhotosItem.module.css"


const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span>photo.acessos</span>
    </li>
  );
};

export default FeedPhotosItem;
