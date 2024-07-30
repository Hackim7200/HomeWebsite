import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
// import Header from './components/Header/Header'
import NavBar from "./components/NavBar/NavBar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      <NavBar />

      <Outlet />
      {/* // where output is used you can use it to set the general
      design of the website e.g., header,footer */}
    </div>
  );
}

export default App;
