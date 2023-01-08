import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.slice(0, 5).map((image, index) => (
        <img src={image} key={index} className="w-1/5 h-32 m-2 object-cover rounded-lg" alt="Gallery image" />
      ))}
      {images.length > 5 && (
        <div className="w-1/5 h-32 m-2 rounded-lg bg-gray-400 text-center text-3xl text-white font-bold">
          +{images.length - 5}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
