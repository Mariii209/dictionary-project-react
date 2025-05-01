import React, { useState } from "react";
import axios from "axios";
import DefinitionDisplay from "./DefinitionDisplay";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);

  function fetchWord(response) {
    console.log(response);
    setResult(response.data);
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
      <section className="SearchSection">
        <form onSubmit={handleSearch}>
          <input
            className="SearchBar"
            type="search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <input type="submit" value="Search" className="SearchSubmit" />
        </form>
      </section>
      <DefinitionDisplay result={result} />
    </div>
  );
}
