import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import React, { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  // const [load, setLoad] = useState(true); //true for first render
  // console.log("rendering App from App.jsx");
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
