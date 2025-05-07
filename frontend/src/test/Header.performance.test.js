import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Performance Test", () => {
  beforeEach(() => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", "TestUser");
  });

  test("Header renders under 50ms", () => {
    const start = performance.now();

    render(
      <BrowserRouter>
        <Header theme={false} toggleTheme={() => {}} />
      </BrowserRouter>
    );

    const end = performance.now();
    const timeTaken = end - start;

    console.log(`Header render time: ${timeTaken.toFixed(2)}ms`);
    expect(timeTaken).toBeLessThan(50);

    expect(screen.getByText(/TestUser/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });
});
