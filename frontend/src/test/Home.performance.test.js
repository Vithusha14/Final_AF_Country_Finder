import { render, screen } from "@testing-library/react";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";

const mockCountries = Array.from({ length: 20 }).map((_, i) => ({
  name: `Country ${i}`,
  region: "Region",
  population: 1000000 + i,
  capital: `Capital ${i}`,
  flag: "https://flagcdn.com/w320/us.png",
  alpha3Code: `C${i}`,
}));

describe("Home Performance Test", () => {
  test("renders 20 countries under 100ms", () => {
    const start = performance.now();

    render(
      <BrowserRouter>
        <Home
          countries={mockCountries}
          error={false}
          loading={false}
          setTheme={() => {}}
          theme={false}
          tryAgain={() => {}}
        />
      </BrowserRouter>
    );

    const end = performance.now();
    const duration = end - start;
    console.log(`Home render time: ${duration.toFixed(2)}ms`);

    expect(duration).toBeLessThan(100);
    expect(screen.getAllByText(/Country/i).length).toBeGreaterThanOrEqual(10);
  });
});
