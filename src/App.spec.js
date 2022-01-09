import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("App component", () => {
  it("should render title 'AutoComplete' ", () => {
    const linkElement = screen.getByText(/Autocomplete/i);
    expect(linkElement).toBeInTheDocument();
  });
});
