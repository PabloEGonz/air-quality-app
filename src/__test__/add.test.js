import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from './__mocks__/add';

describe('it renders correctly', () => {
  test('it renders About link correctly', () => {
    render(<Add />);
    expect(screen.getByText(/Coming soon/)).toBeInTheDocument();
  });
  test('it renders options page correctly', () => {
    const component = Add;
    expect(component).toMatchSnapshot();
  });
});
