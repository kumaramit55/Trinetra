import React from "react";

const CustomSvgImage = ({
  src,
  width = 24,
  height = 24,
  alt = "",
  title = "",
  className = "",
  color = "currentColor",
  style = {},
  role = "img",
  onClick,
  ariaHidden
}) => {
  const commonProps = {
    width,
    height,
    className,
    style,
    role,
    onClick
  };

  // If src is a component (SVG as React Component)
  if (typeof src === "function" || (typeof src === "object" && src !== null)) {
    const SvgComponent = src;
    return (
      <SvgComponent
       fill={color} 
        {...commonProps}
        aria-hidden={ariaHidden ?? (!alt && !title)}
      >
        {title && <title>{title}</title>}
      </SvgComponent>
    );
  }

  // If src is a string (SVG path / URL)
  return <img src={src} alt={alt || title} title={title} {...commonProps} />;
};

export default CustomSvgImage;
