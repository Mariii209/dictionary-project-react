import React from "react";

export default function DefinitionDisplay(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              <p>{meaning.definition}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
