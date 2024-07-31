import React from "react";
import "./FoodCard.scss";
function FoodCard(props) {
  return (
    <article className="food-card">
      <img src={props.img} />
      <div className="food-card-overlay">
        <span className="food-card-text"> {props.text}</span>
      </div>
    </article>
  );
}

export default FoodCard;
