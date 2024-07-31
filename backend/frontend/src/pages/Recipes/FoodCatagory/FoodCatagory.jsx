import React from "react";
import "./FoodCatagory.scss";
import { Link } from "react-router-dom";
import ImageCard from "../../../components/ImageCard/ImageCard";
import MorningTea from '../../../assets/MorningTea.jpg'
import Dinner from '../../../assets/Dinner.jpg'
import Lunch from '../../../assets/Lunch.jpg'




function FoodCatagory() {
  return (
    <div className="card-wrapper">
      <Link to="/food" state={{ name: "Tea" }}>
        <ImageCard img={MorningTea} text={"Tea"} />
      </Link>
      <Link to="/food" state={{ name: "Lunch" }}>
        <ImageCard img={Lunch} text={"Lunch"} />
      </Link>
      <Link to="/food" state={{ name: "Dinner" }}>
        <ImageCard img={Dinner} text={"Dinner"} />
      </Link>
    </div>
  );
}

export default FoodCatagory;
