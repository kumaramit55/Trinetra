import React from 'react';
import PropTypes from 'prop-types';


const ImageCard = ({ src, alt, title, description, onClick }) => {
  return (
    <div className="image-card" onClick={onClick}>
      <img src={src} alt={alt} className="image-card-img" />
      {title && <div className="image-card-title">{title}</div>}
      {description && <div className="image-card-desc">{description}</div>}
      
    </div>
  );
};

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageCard;
