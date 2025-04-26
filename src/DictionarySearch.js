import React, { useState } from "react";
import axios from "axios";

export default function DictionarySearch() {
  const [searchInput, setSearchInput] = useState("");

  function fetchWord(response) {
    console.log(response);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "7f30420fc505ct92a4f1o960ab77843b";
    let api = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;
    axios.get(api).then(fetchWord);
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
