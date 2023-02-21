import React, { useState, useEffect } from "react";
import SearchResult from "../SearchResult";

export default function ByName() {
  const [name, setName] = useState({});
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [name]);

  // const handleChange = () => {};

  const handleSubmit = (e) => {
    e.target.name && setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input type="text" />
        <button>search</button>
      </form>
      <SearchResult country={name} />
    </div>
  );
}
