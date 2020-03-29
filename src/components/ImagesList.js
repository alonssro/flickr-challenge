import React from 'react';

import '../css/ImageList.css';
import ImageCard from './ImageCard';
import Loader from './ImageLoader';

const ImageList = ({ images, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <div className="image-list">
      {images.map(({ farm, server, id, secret, title }) => {
        return (
          <ImageCard farm={farm} server={server} id={id} secret={secret} title={title} key={id} />
        );
      })}
    </div>
  );
};
export default ImageList;
