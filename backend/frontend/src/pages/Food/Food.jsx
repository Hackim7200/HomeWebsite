import React from "react";
import "./Food.scss";
import FoodCard from "../../components/FoodCard/FoodCard";
import { Link } from "react-router-dom";

function Food() {
  return (
    <div className="food-card-wrapper">
      <Link to="/">
        <FoodCard />
      </Link>
      <Link to="/">
        <FoodCard />
      </Link>
      <Link to="/">
        <FoodCard />
      </Link>
      <Link to="/">
        <FoodCard />
      </Link>
      <Link to="/">
        <FoodCard />
      </Link>
      <Link to="/">
        <FoodCard />
      </Link>

   
    </div>
  );
}

export default Food;
