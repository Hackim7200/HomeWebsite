import React from "react";
import "./Food.scss";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { Link, useLocation } from "react-router-dom";
import food from "../../../assets/food.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Food() {

  const location = useLocation()
  const { name } = location.state

  return (
    <div className="food-card-wrapper">

      
      <Link to='/add_recipe' className="add-icon"><FontAwesomeIcon icon={faUtensils} size="10x"/> </Link>


      <Link to="/">
        <FoodCard img = {food} text = {"food name"}/>
      </Link>
     

   
    </div>
  );
}

export default Food;
