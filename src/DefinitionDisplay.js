import React from "react";
import DefinitionExample from "./DefinitionExample";
import Synonyms from "./Synonyms";
import "./DefinitionDisplay.css";

export default function DefinitionDisplay(props) {
  if (!props.result || props.result.error || !props.result.meanings) {
    return null; // Don't show anything if result is missing or invalid
  }
  return (
    <div className="DefinitionDisplay">
      <h1>{props.result.word}</h1>
      <p className="Phonetic">{props.result.phonetic}</p>
      <hr />
      {props.result.meanings.slice(0, 3).map(function (meaning, index) {
        return (
          <div key={index} className="SearchInfo">
            <h3>{meaning.partOfSpeech}</h3>
            <p>{meaning.definition}</p>
            <DefinitionExample example={meaning.example} />
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
