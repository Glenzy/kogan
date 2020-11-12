import { render, screen } from "@testing-library/react";
import { calculateCubicWeight, getCubicWeight } from "Utilities/mixins";

const items = [
  {
    category: "Air Conditioners",
    title: "Window Seal for Portable Air Conditioner Outlets",
    weight: 235,
    size: { width: 26, length: 26, height: 5 },
  },
  {
    category: "Air Conditioners",
    title: "Kogan 10,000 BTU Portable Air Conditioner (2.9KW)",
    weight: 26200,
    size: { width: 49.6, length: 38.7, height: 89 },
  },
  {
    category: "Air Conditioners",
    title: "Kogan 12,000 BTU Portable Air Conditioner (3.5KW, Reverse Cycle)",
    weight: 33500,
    size: { width: 49.5, length: 56.7, height: 87.5 },
  },
  {
    category: "Air Conditioners",
    title: "Kogan 14,000 BTU Portable Air Conditioner (4.1KW, Reverse Cycle)",
    weight: 35450,
    size: { width: 49.5, length: 56.8, height: 87.5 },
  },
];

describe("Utility functions", () => {
  test("calculateCubicWeight", () => {
    const width = 1;
    const length = 1;
    const height = 1;
    const result = calculateCubicWeight({ width, length, height });
    expect(result).toStrictEqual(0.00025000000000000006);
  });

  test("getCubicWeight", () => {
    const result = getCubicWeight(items, 'Air Conditioners');
    expect(result).toStrictEqual({"averageWeight": 15.3759375, "category": "Air Conditioners"});
  });
});
