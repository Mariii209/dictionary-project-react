import React, { useState } from "react";
import axios from "axios";
import DefinitionDisplay from "./DefinitionDisplay";
import "./DictionarySearch.css";
import DefinitionPhoto from "./DefinitionPhoto";

export default function DictionarySearch() {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState(null);
  const [photo, setPhoto] = useState(null);

  function fetchWord(response) {
    console.log(response);
    setResult(response.data);
  }

  function fetchPhoto(response) {
    console.log(response);
    setPhoto(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();
    const apiKey = "7f30420fc505ct92a4f1o960ab77843b";
    const api = `https://api.shecodes.io/dictionary/v1/define?word=${searchInput}&key=${apiKey}`;
    axios.get(api).then(fetchWord);

    const pexelsApiKey =
      "WsWu1zSPVbqyBDYCsFuOOeeEqElj7K2aXbHh9ikHnfRhVWIywFEGmrIx";
    const pexelsApi = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=9`;
    axios
      .get(pexelsApi, {
        headers: { Authorization: pexelsApiKey },
      })
      .then(fetchPhoto);
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
            placeholder="Search a word...."
            onChange={handleInputChange}
          />
          <input type="submit" value="Search" className="SearchSubmit" />
        </form>
      </section>
      <DefinitionDisplay result={result} />
      <DefinitionPhoto photos={photo} />
    </div>
  );
}
