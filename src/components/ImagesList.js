import React from 'react';

import '../css/ImageList.css';
import ImageCard from './ImageCard';
import Loader from './ImageLoader';

const ImageList = ({ images, loading, aspect }) => {
  return loading ? (
    <Loader style={{ marginTop: '20px' }} />
  ) : (
    <div className={aspect === 'grid' ? 'image-list-grid' : 'image-list-list'}>
      {images.map(({ farm, server, id, secret, title }) => {
        return (
          <ImageCard farm={farm} server={server} id={id} secret={secret} title={title} key={id} />
        );
      })}
    </div>
  );
};
export default ImageList;
