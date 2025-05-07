import React from "react";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('/blueworld.jpg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <button
          onClick={() => navigate("/login")}
          className="mb-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 w-48" // Uniform button size
        >
          Login
        </button>
        <br />
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 w-48" // Uniform button size
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
