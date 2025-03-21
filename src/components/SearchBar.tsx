import { ChangeEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  searchQuery,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="relative flex items-center max-w-md mx-auto mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-800 focus:border-amber-900"
      />
      <MagnifyingGlassIcon
        className="absolute left-3 size-5 text-gray-400"
        aria-hidden="true"
      />
    </div>
  );
}
