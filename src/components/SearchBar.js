import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";

let mockResults = [
  { name: "Victorious", artist: ["Panic! At The Disco"] },
  { name: "Cinnamon Girl", artist: ["Lana Del Rey"] },
];

const SearchBar = ({ token }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <div className="search-bar">
        <input type="text" value={search} onChange={handleChange}></input>
      </div>

      <SearchResults results={mockResults} />
    </div>
  );
};

export default SearchBar;
