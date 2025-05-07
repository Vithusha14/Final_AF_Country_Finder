// src/components/About.js
import React from "react"; // ❌ Removed: import backgroundImage from "./assets/blueworld.jpg";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-6 py-12"
      style={{ backgroundImage: `url("/blueworld.jpg")` }} // ✅ Updated here
    >
      <div className="max-w-4xl mx-auto bg-black bg-opacity-50 rounded-lg p-8 shadow-xl">
        <h1 className="text-4xl font-bold mb-4 border-b pb-2">About Country Finder</h1>

        <p className="text-lg mb-6">
          Country Finder is a modern web app that lets you explore detailed
          information about all countries in the world.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>🌍 Search countries by name</li>
          <li>🧭 Filter by region or continent</li>
          <li>❤️ Save your favorite countries</li>
          <li>🧾 View detailed facts including borders, population, and more</li>
        </ul>

        <div className="mt-6">
          <p>
            This app uses data from the
            <a
              href="https://restcountries.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline ml-1"
            >
              REST Countries API
            </a>
            .
          </p>
        </div>

        <div className="mt-8">
          <p className="text-lg mb-2">Have questions or feedback?</p>
          <a
            href="mailto:contact@countryfinder.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
