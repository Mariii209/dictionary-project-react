import React from "react";

export default function DefinitionExample(props) {
  if (props.example) {
    return <div className="DefinitionExample">Example: {props.example}</div>;
  } else {
    return null;
  }
}
