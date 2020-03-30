import React from 'react';

import '../css/ImageList.css';
import ImageCard from './ImageCard';
import Loader from './ImageLoader';

const ImageList = ({ images, loading, aspect, isSearch }) => {
  return loading ? (
    <Loader style={{ marginTop: '20px' }} />
  ) : (
    <div className={aspect === 'grid' ? 'image-list-grid' : 'image-list-list'}>
      {isSearch
        ? images.map(({ farm, server, id, secret, title }) => {
            return (
              <ImageCard
                farm={farm}
                server={server}
                id={id}
                secret={secret}
                title={title}
                key={id}
                isSearch={isSearch}
              />
            );
          })
        : images.map(({ title, link, id }) => {
            return <ImageCard id={id} title={title} link={link} key={id} isSearch={isSearch} />;
          })}
    </div>
  );
};
export default ImageList;
