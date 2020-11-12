import { render, screen } from "@testing-library/react";
import App from "pages/index";

const items = [{
  category: "Air Conditioners",
  size: {width: 26, length: 26, height: 5},
  title: "Window Seal for Portable Air Conditioner Outlets",
  weight: 235
}]

describe("App", () => {
  it("renders without crashing", () => {
    render(<App items={items}/>);
    expect(
      screen.getByRole("heading", { name: "Coding Challenge" })
    ).toBeInTheDocument();
  });
  it("sets default state", () => {
    render(<App items={items}/>);
    expect(
      screen.getByText(/Air Conditioners: 0.8450000000000002 kg/i)
    ).toBeInTheDocument();
  });
});