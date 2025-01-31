import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode; // Optional icon
  className?: string; // Allows additional styling
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  icon,
  className = "",
}) => {
  return (
    <div className="relative w-full">
      {/* Optional Icon */}
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}

      {/* Input Field */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pl-10 pr-4 h-10 border rounded-2xl bg-lighter-gray focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-dark-gray placeholder:text-base dark:bg-dark-mode-bg dark:text-dark-mode-text dark:border-none ${className}`}
      />
    </div>
  );
};

export default Input;
