import React from "react";
import "../countriesData.js";
import countriesData from "../countriesData.js";

export default function CountryDetail(){
  const countryName = new URLSearchParams(location.search).get("name");
  let hello;
  countriesData.map((country) => {
    if (country.name.common === countryName) {
      hello = country.flags.svg;
    }
  });
  return (
    <>
      <div>Welcome to {countryName}</div>
      <img src={hello} style={{height:"200px"}}/>
    </>
  );
}
