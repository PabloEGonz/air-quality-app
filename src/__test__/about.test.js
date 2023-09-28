import { render, screen } from '@testing-library/react';
import About from './__mocks__/about';
import '@testing-library/jest-dom';

test('it renders correctly', () => {
  render(<About />);
  expect(screen.getByText(/Qualitative/)).toBeInTheDocument();
});

test('it renders options page correctly', () => {
  const component = About;
  expect(component).toMatchSnapshot();
});
