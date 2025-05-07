import React, { useEffect, useState } from "react";

import Countrieslist from "./CountriesList";
import Pagination from "./Pagination";
import Filters from "./Filters";

const Home = ({ loading, error, tryAgain }) => {
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [page, setPage] = useState(0);

  // Fetch all countries initially
  const fetchAll = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all"); //FRTCH ALL
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.error("Failed to fetch all countries", err);
    }
  };

  // Search countries by name
  const handleSearch = async (searchTerm) => {
    if (!searchTerm) return fetchAll();
    try {
      const res = await fetch(`https://restcountries.com/v2/name/${searchTerm}`); // SEARCH API
      const result = await res.json();
      setCountries(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error("Search failed", err);
      setCountries([]);
    }
  };

  // Filter by region
  const handleRegionChange = async (selectedRegion) => {
    if (!selectedRegion) return fetchAll();
    try {
      const res = await fetch(`https://restcountries.com/v2/region/${selectedRegion}`); //REGION API 
      const result = await res.json();
      setCountries(result);
    } catch (err) {
      console.error("Region filter failed", err);
      setCountries([]);
    }
  };

  // Fetch all on first load
  useEffect(() => {
    fetchAll();
  }, []);

  // Update when value or region changes
  useEffect(() => {
    setPage(0);
    if (region) {
      handleRegionChange(region);
    } else {
      handleSearch(value);
    }
  }, [region, value]);

  return (
    <div className="px-12 py-6 scroll-smooth">
      <Filters
        value={value}
        changeHandler={setValue}
        region={region}
        setRegion={setRegion}
      />
      <div className="grid scroll-smooth sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-5 gap-10 xl:gap-16">
        <Countrieslist tryAgain={tryAgain} error={error} loading={loading} page={page} countries={countries} />
      </div>
      <Pagination setPage={setPage} pageN={page} countries={countries} />
    </div>
  );
};

export default Home;




