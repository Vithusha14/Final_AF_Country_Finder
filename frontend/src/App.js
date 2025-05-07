import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Countrypage from "./components/CountryPage";
import Home from "./components/Home";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Register from "./components/Register";
import CountryDetailsPage from "./components/CountryDetailsPage"; // Import CountryDetailsPage component
import MyCollection from "./components/MyCollection";
import About from "./components/About";


function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("/blueworld.jpg");

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      let response = await fetch("https://restcountries.com/v2/all"); //GET ALL 
      let countries = await response.json();
      countries = countries.filter((elem) => elem.name !== "Israel");
      setCountries(countries);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme") === "false" ? false : true);
    } else {
      localStorage.setItem("theme", false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
  }, [theme]);

  return (
    <div
      className={`App ${theme ? "dark" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        margin: "0",
      }}
    >
      <div className="min-h-screen scroll-smooth transition duration-300 bg-lightbg dark:bg-darkbg">
        <Router>
          <Header theme={theme} toggleTheme={() => setTheme((theme) => !theme)} />
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route
              path="/home"
              element={
                <Home
                  error={error}
                  countries={countries}
                  loading={loading}
                  theme={theme}
                  setTheme={setTheme}
                  tryAgain={fetchData}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/collection" element={<MyCollection />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/country/:countryCode"
              element={<CountryDetailsPage countries={countries} loading={loading} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
