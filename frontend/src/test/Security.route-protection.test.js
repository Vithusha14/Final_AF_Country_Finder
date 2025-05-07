// import { render, screen } from "@testing-library/react";
// import App from "../App";
// import { MemoryRouter } from "react-router-dom";

// test("unauthenticated user is redirected from /collection to /login", () => {
//   localStorage.removeItem("isLoggedIn");
//   render(
//     <MemoryRouter initialEntries={["/collection"]}>
//       <App />
//     </MemoryRouter>
//   );

//   // Assert we're on login page
//   expect(screen.getByRole("heading", { name: /login/i })).toBeInTheDocument();
// });
