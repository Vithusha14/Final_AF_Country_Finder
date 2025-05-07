import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    if (password === confirmPassword) {
      console.log("Registering user", { firstName, lastName, username, password });
      navigate("/login"); // Redirect to login after successful registration
    } else {
      alert("Passwords do not match!");
    }
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
        <h2 className="text-2xl text-center mb-6">Register</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-semibold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-semibold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
