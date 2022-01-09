import { render, screen, within } from "@testing-library/react";
import SuggestionList from "./suggestion-list";

beforeEach(() => {
  const mockData = [
    {
      id: 1,
      city: "Newyork",
      state: "Newyork",
    },
    {
      id: 2,
      city: "Los Angeles",
      state: "California",
    },
  ];
  render(<SuggestionList getSuggestionList={mockData} />);
});

describe("Suggestion List component", () => {
  it("should render list of 2 cities", () => {
    const list = screen.getByRole("list", {
      name: /suggestionList/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(2);
  });
});
