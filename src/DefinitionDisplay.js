import React from "react";
import DefinitionExample from "./DefinitionExample";
import Synonyms from "./Synonyms";

export default function DefinitionDisplay(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        <p>{props.result.phonetic}</p>
        {props.result.meanings.slice(0, 3).map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>{meaning.definition}</p>
              <DefinitionExample example={meaning.example} />
              <Synonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
