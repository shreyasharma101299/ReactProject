import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("should load button component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  it("should load input name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");

    //Assertion
    expect(input).toBeInTheDocument();
  });
  it("should load 2 input boxes in contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes).toHaveLength(2);
  });
});
