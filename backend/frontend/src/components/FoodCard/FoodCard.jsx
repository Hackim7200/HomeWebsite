import React from "react";
import "./FoodCard.scss";
import food from "../../assets/food.jpg";
function FoodCard() {
  return (
    <article className="food-card">
      <img src={food} />
      <div className="food-card-overlay">
        <span className="food-card-text"> Lasagna</span>
      </div>
    </article>
  );
}

export default FoodCard;
