import React from "react";

import "./Country.css";

const Country = ({ name, capital, subregion, demonym, region, flag }) => {
  return (
    <div className="country-container">
      <div className="country-row">
        <div className="country">
          <img src={flag} alt="country" />
          <h1>{name}</h1>
          <p className="country-symbol">{capital}</p>
        </div>
        <div className="country-data">
          <p className="country-percent red">{subregion}</p>
          <p className="country-percent green">{demonym}</p>
          <p className="country-marketcap">{region}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
