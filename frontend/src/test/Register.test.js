import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../components/Register";
import { MemoryRouter } from "react-router-dom";

describe("Register Component", () => {
  test("renders all input fields", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirm Password/i)).toBeInTheDocument();
  });

  test("shows alert if passwords do not match", () => {
    window.alert = jest.fn(); // mock alert

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "abc123" },
    });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
      target: { value: "xyz456" },
    });
    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(window.alert).toHaveBeenCalledWith("Passwords do not match!");
  });
});
