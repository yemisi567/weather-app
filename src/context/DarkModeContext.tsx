import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create Context with default values
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Custom hook for easy access
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

// Dark Mode Provider Component
export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Apply dark mode class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Add 'dark' class to <html>
      document.body.classList.add("bg-gray-900", "text-white"); // Ensure the background updates
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
    localStorage.setItem("darkMode", String(darkMode)); // Save state
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
