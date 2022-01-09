import { render, fireEvent, screen } from "@testing-library/react";
import AutoComplete from "./auto-complete";

beforeEach(() => {
  render(<AutoComplete />);
});

describe("Auto complete component", () => {
  it("should assert change of input text 'sa' ", () => {
    const input = screen.getByLabelText("autocomplete");
    fireEvent.change(input, { target: { value: "sa" } });
    expect(input.value).toBe("sa");
  });
});
