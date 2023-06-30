import { render, screen } from "@testing-library/react"
import About from "./about";
import '@testing-library/jest-dom';
import React from "react";

test('it renders correctly', () => {
  render(<About />);
  expect(screen.getByText(/Qualitative/)).toBeInTheDocument();
});