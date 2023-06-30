import { render, screen } from "@testing-library/react"
import Card from "./card";
import '@testing-library/jest-dom';
import React from "react";

describe('it renders correctly', () => {
  const obj = {
    name: 'Lahore',
    lat: 31.5656822,
    lon: 74.3141829,
    country: 'PK',
    state: 'Punjab',
    aqi: 5,
  };
  test('Check if name is in the document', () => {
    render(<Card data={obj} />);
    expect(screen.getByText(/Lahore/)).toBeInTheDocument();
  });
  test('Check if country is in the document', () => {
    render(<Card data={obj} />);
    expect(screen.getByText(/PK/)).toBeInTheDocument();
  });
});


