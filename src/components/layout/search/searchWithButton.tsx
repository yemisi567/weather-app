import React, { useState } from "react";
import { useWeather } from "../../hooks/useWeather";
import { SearchIcon } from "../../Images/SearchIcon";
import Button from "../../ui/Button";

interface SearchWithButtonProps {
  width?: string;
}

const SearchWithButton: React.FC<SearchWithButtonProps> = ({
  width = "w-full",
}) => {
  const [query, setQuery] = useState("");
  const { fetchWeather } = useWeather();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query);
      setQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center bg-lighter-gray rounded-xl h-16 p-1 ${width} relative`}
    >
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
        <SearchIcon />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent outline-none pl-12 pr-3 py-2 text-gray-600"
      />

      {/* Search Button */}
      <Button
        type="submit"
        className="bg-light-blue text-primary font-bold px-4 mr-2 h-12 py-2 rounded-xl text-base"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchWithButton;
