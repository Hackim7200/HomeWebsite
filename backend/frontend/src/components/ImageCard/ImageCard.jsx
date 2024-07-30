import React from "react";
import "./ImageCard.scss";

function ImageCard(props) {
  return (
    <article className="image-card">
      <img src={props.img} className="image-card-img" />
      <div className="image-card-overlay">
        <span className="image-card-text">{props.text}</span>
      </div>
    </article>
  );
}

export default ImageCard;
