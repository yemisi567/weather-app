import React from "react";
import Button from "./Button";

const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({
  onClose,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[300px] shadow-lg">
        {children}
        <Button
          onClick={onClose}
          className="mt-3 w-full bg-red-500 text-white font-medium text-base rounded-lg"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
