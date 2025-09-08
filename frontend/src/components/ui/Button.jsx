import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const variantStyles = {
  primary:
    "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow-md",
  secondary:
    "bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium shadow-sm",
};

const Button = ({ children, variant = "primary", onClick, to, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  const baseStyle = "text-sm px-6 py-2 rounded-md transition-all duration-200";
  const variantClass = variantStyles[variant] || variantStyles.primary;

  return (
    <button onClick={handleClick} className={`${baseStyle} ${variantClass} ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
