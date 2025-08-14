// ButtonComponent.jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const CustomButton = ({
  type = 'button',
  variant = 'primary',
  size,
  disabled = false,
  children,
  onClick,
  className,
  ...rest
}) => {
  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
