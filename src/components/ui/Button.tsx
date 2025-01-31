import React from "react";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode; // Optional icon
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  children,
  className = "",
  disabled = false,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
