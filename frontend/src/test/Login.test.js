import { render, screen } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter } from "react-router-dom";

test("renders login form", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
});
