import React, { useState } from "react";

export default function DictionarySearch() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(searchInput);
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <form onSubmit={handleSearch}>
        <input type="search" value={searchInput} onChange={handleInputChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
