import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search expenses..."
      aria-label="Search expenses"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
