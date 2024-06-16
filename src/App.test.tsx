import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Matt Johnson name", () => {
  render(<App />);
  const linkElement = screen.getByText(/Matt Johnson/i);
  expect(linkElement).toBeInTheDocument();
});
