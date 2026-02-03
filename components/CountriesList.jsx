import React, { useEffect, useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList({query}) {
   
  // const [countriesData,setCountriesData] = useState([]);
  useEffect(()=>{
    // fetch('https://restcountries.com/v3.1/all')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setCountriesData(data)
    //   })

    const time = new Date()
   const setId = setInterval(()=>{
      console.log("component is running");
    },1000)



      return ()=>{
        console.log("unmounting")
        console.log((new Date()-time)/1000 + " seconds component was mounted")
        clearInterval(setId);
      }
  },[])

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
    </div>
  );
}
