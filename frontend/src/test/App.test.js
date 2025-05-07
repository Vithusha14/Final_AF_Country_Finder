// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Welcome to Country Finder heading", () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to Country Finder/i);
  expect(heading).toBeInTheDocument();
});
