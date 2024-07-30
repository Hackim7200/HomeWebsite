import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Nav from "./components/Nav/Nav";
// import Header from './components/Header/Header'


import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Nav />
      {/* <Header/> */}
      
      <Outlet /> 
      {/* // where output is used you can use it to set the general
      design of the website e.g., header,footer */}
    </div>
  );
}

export default App;
