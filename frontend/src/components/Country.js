import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Country = ({ flag, name, population, region, capital, alpha3Code }) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);

  // Load liked status from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myCountries")) || [];
    const isLiked = saved.some((c) => c.name === name);
    setLiked(isLiked);
  }, [name]);

  // Toggle like state and update localStorage
  const handleLikeClick = (e) => {
    e.stopPropagation(); // prevent navigation on heart click
    const saved = JSON.parse(localStorage.getItem("myCountries")) || [];

    if (!liked) {
      const newEntry = { flag, name, population, region, capital, alpha3Code };
      localStorage.setItem("myCountries", JSON.stringify([...saved, newEntry]));
    } else {
      const updated = saved.filter((c) => c.name !== name);
      localStorage.setItem("myCountries", JSON.stringify(updated));
    }

    setLiked(!liked);
  };

  return (
    <div
    onClick={() => navigate(`/country/${alpha3Code}`)}

      className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-x-[1.02] hover:scale-y-[1.02] transition dark:bg-darkelem dark:text-white text-gray-900 shadow-md"
    >
      <div>
        <img className="w-full h-40 object-cover" src={flag} alt={name} />
      </div>
      <div className="font-medium text-base px-4 py-5">
        <p className="text-lg font-semibold">{name}</p>
        <p className="mt-2">
          Population: <span className="font-light opacity-80">{population}</span>
        </p>
        <p>
          Region: <span className="font-light opacity-80">{region}</span>
        </p>
        <p>
          Capital: <span className="font-light opacity-80">{capital}</span>
        </p>

        {/* Heart Icon as Like Button */}
        <button
          onClick={handleLikeClick}
          className={`mt-2 text-2xl ${liked ? "text-red-500" : "text-gray-500"}`}
        >
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default Country;
