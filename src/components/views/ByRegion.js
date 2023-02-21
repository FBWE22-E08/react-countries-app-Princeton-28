import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

export default function ByRegion() {
  const [region, setRegion] = useState("Africa");
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [region]);

  const handleChange = (e) => {
    e.target.checked && setRegion(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type={"radio"}
        name="region"
        defaultChecked
        value="Africa"
      />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input
        onChange={handleChange}
        type={"radio"}
        name="region"
        value="Americas"
      />
      <label style={{ marginRight: "15px" }}>Americas</label>
      <input
        onChange={handleChange}
        type={"radio"}
        name="region"
        value="Asia"
      />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input
        onChange={handleChange}
        type={"radio"}
        name="region"
        value="Europe"
      />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input
        onChange={handleChange}
        type={"radio"}
        name="region"
        value="Oceania"
      />
      <label>Oceania</label>

      <div className="cardsContainer"></div>

      {country.map((element, index) => (
        <CountryCard country={element} key={index} />
      ))}
    </div>
  );
}
