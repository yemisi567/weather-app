import React from "react";
import { SearchIcon } from "../../Images/SearchIcon";
import Input from "../../ui/Input";

interface SearchProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <Input
        placeholder="Search"
        value={value}
        onChange={onChange}
        icon={<SearchIcon />}
        className="w-[160px]"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
