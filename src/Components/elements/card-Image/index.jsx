import React from "react";
import PropTypes from "prop-types";

const CardImage = ({
  src,
  srcSet,
  sizes = "(max-width: 576px) 480px, 800px",
  alt,
  width = 800,
  height = 450,
  className = "",
  loading = "lazy",
  rounded = false,
  shadow = false,
  aspectRatio, 
}) => {
  const style = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: rounded ? "12px" : undefined,
    boxShadow: shadow ? "0 4px 12px rgba(0, 0, 0, 0.15)" : undefined,
    aspectRatio: aspectRatio, // optional
  };

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      width={width}
      height={height}
      className={`img-dimension ${className}`}
      style={style}
    />
  );
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager", "auto"]),
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  aspectRatio: PropTypes.string,
};

export default CardImage; 