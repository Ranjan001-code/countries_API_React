import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [query, setQuery] = React.useState("");
  const [load, setLoad] = useState(true); //true for first render
  // console.log("rendering App from App.jsx");
  return (
    <>
      {load == true ? (
        <button
          className="load"
          onClick={() => {
            setLoad(false);
          }}
        >
          Load the Website
        </button>
      ) : (
        <>
          <Header />
          <main>
            <div className="search-filter-container">
              <SearchBar setQuery={setQuery} />
              <SelectMenu />
            </div>
            <CountriesList query={query} />
          </main>
        </>
      )}
    </>
  );
};

export default App;
