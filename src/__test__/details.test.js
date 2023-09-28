import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from './__mocks__/details';

describe('it renders correctly', () => {
  test('it renders About link correctly', () => {
    render(<Details />);
    expect(screen.getByText(/Air/)).toBeInTheDocument();
  });
  test('it renders options page correctly', () => {
    const component = Details;
    expect(component).toMatchSnapshot();
  });
});
