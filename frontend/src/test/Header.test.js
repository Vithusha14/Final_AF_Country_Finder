import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header Component", () => {
  test("renders title and author", () => {
    render(
      <MemoryRouter>
        <Header theme={false} toggleTheme={jest.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText(/Welcome to Country Finder/i)).toBeInTheDocument();
    expect(screen.getByText(/VITHUSHA/i)).toBeInTheDocument();
  });

  test("renders buttons", () => {
    render(
      <MemoryRouter>
        <Header theme={false} toggleTheme={jest.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /My Collection/i })).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });
});
