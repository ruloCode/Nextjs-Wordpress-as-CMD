import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 butonPrimary rounded-md font-bold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
