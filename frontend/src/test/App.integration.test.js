// src/test/App.integration.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("Integration Test: Login Flow", () => {
  test("Login and redirect to Home with My Collection visible", () => {
    // Render App with MemoryRouter starting from /login
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    // Step 1: Fill login form
    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });

    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "password123" },
    });

    // Step 2: Submit the form
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Step 3: Check that we are redirected to /home
    expect(screen.getByText(/My Collection/i)).toBeInTheDocument();
  });
});
