import React from "react";
import "./DefinitionExample.css";

export default function DefinitionExample(props) {
  if (props.example) {
    return <div className="DefinitionExample">"{props.example}"</div>;
  } else {
    return null;
  }
}
