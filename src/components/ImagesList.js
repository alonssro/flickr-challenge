import React from 'react';
import '../css/ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageElements = images.map(({ farm, server, id, secret, title }) => {
    return <ImageCard farm={farm} server={server} id={id} secret={secret} title={title} key={id} />;
  });
  return <div className="image-list">{imageElements}</div>;
};
export default ImageList;
