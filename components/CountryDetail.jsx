import React from "react";
import "../countriesData.js";
import countriesData from "../countriesData.js";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  // const countryName = new URLSearchParams(location.search).get("name");
  const countryName = useParams().country;

  let hello = undefined;
  countriesData.map((country) => {
    if (country.name.common === countryName) {
      hello = country.flags.svg;
    }
  });

  return (
    <>
      <button
        onClick={() => window.history.back()}
        style={{ margin: "10px 20px", padding: "5px 10px" }}
      >
        Back
      </button>
      {hello === undefined ? (
        <div>Country not found</div>
      ) : (
        <>
          <div>Welcome to {countryName}</div>
          <img src={hello} style={{ height: "200px", margin: "20px" }} />
        </>
      )}
    </>
  );
}
