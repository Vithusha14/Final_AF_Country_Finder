import { render, screen } from "@testing-library/react";
import App from "../App";
import { MemoryRouter } from "react-router-dom";

describe("Integration Test: My Collection Access", () => {
  test("Redirects unauthenticated user to login", () => {
    localStorage.removeItem("isLoggedIn"); // ensure not logged in

    render(
      <MemoryRouter initialEntries={["/collection"]}>
        <App />
      </MemoryRouter>
    );

    // Try more flexible matching
    expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
  });

  test("Shows My Collection for logged-in user", () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", "testuser");

    render(
      <MemoryRouter initialEntries={["/collection"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/My Liked Countries/i)).toBeInTheDocument();
  });
});
