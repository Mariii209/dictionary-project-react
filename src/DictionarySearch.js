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

    axios
      .get(api)
      .then((response) => {
        const data = response.data;

        // ✅ Word not found
        if (data.error || !data.word || !data.meanings) {
          alert("❌ Word not found. Please try again.");
          setResult(null);
          setPhoto(null);
        } else {
          fetchWord(response); // Show definition
          fetchPhotos(); // Then try to load photos
        }
      })
      .catch(() => {
        alert("❌ Error fetching the word. Please try again.");
        setResult(null);
        setPhoto(null);
      });
  }

  function fetchPhotos() {
    const pexelsApiKey =
      "WsWu1zSPVbqyBDYCsFuOOeeEqElj7K2aXbHh9ikHnfRhVWIywFEGmrIx";
    const pexelsApi = `https://api.pexels.com/v1/search?query=${searchInput}&per_page=6`;

    axios
      .get(pexelsApi, {
        headers: { Authorization: pexelsApiKey },
      })
      .then((response) => {
        if (response.data.photos.length === 0) {
          alert("⚠️ No images found for this word.");
          setPhoto(null);
        } else {
          fetchPhoto(response);
        }
      })
      .catch(() => {
        alert("⚠️ Could not load images. Please try again.");
        setPhoto(null);
      });
  }

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="DictionarySearch">
      <div className="SearchSection">
        <div>
          <h1 className="WordBank">Dictionary</h1>
        </div>
        <p>Explore words, definitions, and their visual representations</p>
        <form className="SearchEngine" onSubmit={handleSearch}>
          <i className="fa-solid fa-magnifying-glass Search"></i>
          <input
            className="SearchBar"
            type="search"
            value={searchInput}
            placeholder="Search a word...."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <DefinitionDisplay result={result} />
      <DefinitionPhoto photos={photo} />
    </div>
  );
}
