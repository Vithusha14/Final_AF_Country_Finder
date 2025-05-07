import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Logging in with", { username, password });

    // Redirect to the Home page after successful login
    navigate("/home");  // Redirect to Home page after successful login
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('/blueworld.jpg')", // Background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
