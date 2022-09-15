import React from "react";
import { PHOTOS_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import FeedPhotosItem from "./FeedPhotosItem";
import styles from "./FeedPhotos.module.css"

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <loading />;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photp={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
