import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-white items-center justify-between shadow-md 2xl:py-7 2xl:px-10 py-5 px-6 dark:text-darktext text-gray-900 dark:bg-darkelem">
      
      {/* Left: Title + About Us */}
      <div className="flex items-center space-x-4 dark:text-darktext">
        <div>
          <h1 onClick={() => navigate("/")} className="text-xl font-semibold cursor-pointer">
            Welcome to Country Finder
          </h1>
          <p className="font-mono text-xs">By : VITHUSHA</p>
        </div>

        <button
          onClick={() => navigate("/about")}
          className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600 flex items-center text-sm"
        >
          🌐 About Us
        </button>
      </div>

      {/* Right: My Collection + Theme toggle */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate("/collection")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
        >
          ❤️ My Collection
        </button>

        <div onClick={toggleTheme} className="flex items-center space-x-2 font-semibold cursor-pointer">
          {!theme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <p>{!theme ? "Dark" : "Light"} Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
