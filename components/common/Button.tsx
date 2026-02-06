import React from 'react';
import { ButtonProps } from '../../interfaces'; // Importing the rules

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // Simple logic to switch colors based on "variant"
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition duration-200";
  const variantStyle = variant === 'primary' 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {label}
    </button>
  );
};

export default Button;