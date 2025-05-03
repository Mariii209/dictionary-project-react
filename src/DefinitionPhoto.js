import React from "react";

export default function DefinitionPhoto(props) {
  if (props.photos) {
    return (
      <div className="DefinitionPhoto row ms-3 me-3 ">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index} className="col-4 mb-3 ">
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                  className="img-fluid rounded"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
