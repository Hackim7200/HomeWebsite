import React from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import food from "../../assets/food.jpg";
import Automation from "../../assets/automation.jpg";
import fish from "../../assets/fish.png";


import "./Home.scss"
import {  Link } from "react-router-dom";

function Home() {
  return (
    <div className="card-wrapper">
      <Link to="/food"><ImageCard img={food} text={"Recipes"} /></Link>
      <Link to="/automation"><ImageCard img={Automation} text={"Automation"} /></Link>
      <Link to="/aquarium"><ImageCard img={fish} text={"Aquatic"} /></Link>


    </div>
  );
}

export default Home;
