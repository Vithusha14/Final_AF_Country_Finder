import React, { useEffect, useState } from "react";
import Country from "./Country";

const MyCollection = () => {
  const [likedCountries, setLikedCountries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myCountries")) || [];
    setLikedCountries(saved);
  }, []);

  return (
    <div className="px-12 py-6">
      <h1 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">My Liked Countries</h1>
      {likedCountries.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No countries liked yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-10 xl:gap-16">
          {likedCountries.map((country) => (
            <Country key={country.alpha3Code} {...country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;
