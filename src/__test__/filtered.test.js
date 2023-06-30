import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Filtered from "./__mocks__/filtered";

describe('it renders correctly', () => {

  test('it renders About link correctly', () => {
    render(<Filtered />);
    expect(screen.getByText(/Filter/)).toBeInTheDocument();
  });
  test('it renders options page correctly', () => {
    const component = Filtered;
    expect(component).toMatchSnapshot();
  });
})