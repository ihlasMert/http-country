import React, { useState, useEffect } from "react";

import Country from "./Country";

import axios from "axios";
import "./App.css";

function App() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => {
        setCountry(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const filteredCountry = country.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="country-app">
      <div>
        <h1>Search a Country</h1>
        <form>
          <input
            className="country-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCountry.map((country) => {
        return (
          <Country
            key={country.id}
            name={country.name}
            capital={country.capital}
            subregion={country.subregion}
            demonym={country.demonym}
            region={country.region}
            flag={country.flag}
          />
        );
      })}
    </div>
  );
}

export default App;
