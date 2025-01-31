import React, { useState, useEffect } from "react";
import Search from "./search/SearchBar";
import { LocationPin } from "../Images/LocationPin";
import { Depth } from "../Images/Depth";
import { useDarkMode } from "../../context/DarkModeContext";
import { MoonIcon } from "../Images/Moon";
import { useWeather } from "../hooks/useWeather";
import Button from "../ui/Button";
import { useDebounce } from "../hooks/useDebounce";

const Header: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { fetchWeather } = useWeather();
  const [query, setQuery] = useState("");

  // Use debounce to delay search execution
  const debouncedQuery = useDebounce(query, 1000);

  // Trigger API call only when debounced value changes
  useEffect(() => {
    if (debouncedQuery.trim()) {
      fetchWeather(debouncedQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  // Handle input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 h-[65px] border-b">
      {/* Left Section - Title & Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
        {/* Title */}
        <span className="text-lg font-bold flex items-center gap-2">
          <Depth />
          Weather
        </span>
        {/* Desktop Search */}
        <div className="hidden md:block max-w-[160px]">
          <Search placeholder="Search" value={query} onChange={handleSearch} />
        </div>
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Mobile Search Button */}
        <Button
          className="md:hidden w-[180px]"
          onClick={() => setShowSearch(!showSearch)}
        >
          <Search placeholder="Search" value={query} onChange={handleSearch} />
        </Button>
        <div className="hidden md:flex items-center">
          <div
            className="flex items-center gap-1 cursor-pointer select-none text-black dark:text-white"
            onClick={toggleDarkMode}
          >
            <MoonIcon />
            <p className="capitalize">
              {darkMode ? "light mode" : "dark mode"}
            </p>
          </div>
        </div>
        {/* Location Icon */}
        <div className="p-3 bg-lighter-gray rounded-xl items-center justify-center hidden md:block dark:bg-dark-mode-bg dark:text-white">
          <LocationPin />
        </div>

        {/* User Profile */}
        <img
          src="/assets/images/user.png"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Header;
