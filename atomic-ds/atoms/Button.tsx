import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, ...rest }) => {
  return (
    <button
      className={`px-4 py-2 butonPrimary rounded-md font-bold ${className}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
