import { ChangeEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ onSearchChange }: SearchBarProps) {
  const [isSearchEditable, setIsSearchEditable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    onSearchChange(newQuery);
  };

  const handleSearchClick = () => {
    setIsSearchEditable(true);
    setTimeout(() => {
      const inputElement =
        document.querySelector<HTMLInputElement>("#navbar-search");
      inputElement?.focus();
    }, 100);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setIsSearchEditable(false);
    }
  };

  return (
    <div className="flex items-center">
      <input
        id="navbar-search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={handleSearchClick}
        onBlur={handleSearchBlur}
        placeholder={isSearchEditable ? "Search products..." : ""}
        readOnly={!isSearchEditable}
        className={`
          w-64 px-4 py-2 text-sm rounded-md
          border border-transparent
          focus:outline-none
          ${isSearchEditable ? "" : "cursor-pointer"}
        `}
      />
      <button
        onClick={handleSearchClick}
        className="-ml-8 p-2 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="size-6 cursor-pointer"
        />
      </button>
    </div>
  );
}
