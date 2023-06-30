import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Quality from "../components/quality";

describe('it renders correctly', () => {
  test('Check if returns the right message', () => {
    render(<Quality number={5} />);
    expect(screen.getByText(/Very Poor/)).toBeInTheDocument();
  });
  test('Check if returns the right message', () => {
    render(<Quality number={4} />);
    expect(screen.getByText(/Poor/)).toBeInTheDocument();
  });
  test('Check if returns the right message', () => {
    render(<Quality number={3} />);
    expect(screen.getByText(/Moderate/)).toBeInTheDocument();
  });
  test('Check if returns the right message', () => {
    render(<Quality number={2} />);
    expect(screen.getByText(/Fair/)).toBeInTheDocument();
  });
  test('Check if returns the right message', () => {
    render(<Quality number={1} />);
    expect(screen.getByText(/Good/)).toBeInTheDocument();
  });
  test('it renders options page correctly', () => {
    const component = Quality;
    expect(component).toMatchSnapshot();
  });
});
