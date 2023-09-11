import React, { useState } from 'react';
import './Portfolio.scss';

const Gallary = ({ imageUrls, imageDescriptions }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleImageClose = () => {
    setSelectedImage(null);
  };

  const galleryDiv = (
    <div className='imageUrls'>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1} description`}
          onClick={() => handleImageClick(index)}
        />
      ))}
    </div>
  );

  const closeButton = (
    <button className='close-button' onClick={handleImageClose}>
      X
    </button>
  );

  const expandedImageDiv = selectedImage !== null ? (
    <div className='expandedImage'>
      {closeButton}
      <img
        src={imageUrls[selectedImage]}
        alt={`Expanded Image ${selectedImage + 1} description`}
      />
      <p>{imageDescriptions[selectedImage]}</p>
    </div>
  ) : null;

  return (
    <>
      {galleryDiv}
      {expandedImageDiv}
    </>
  );
};

export default Gallary;
