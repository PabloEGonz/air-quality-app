import { render, screen } from '@testing-library/react';
import Options from './__mocks__/options';
import '@testing-library/jest-dom';

describe('it renders correctly', () => {
  test('it renders About link correctly', () => {
    render(<Options />);
    expect(screen.getByText(/About/)).toBeInTheDocument();
  });
  test('it renders Add link correctly', () => {
    render(<Options />);
    expect(screen.getByText(/Add a City/)).toBeInTheDocument();
  });
  test('it renders Cities Air Quality link correctly', () => {
    render(<Options />);
    expect(screen.getByText(/Cities Air Quality/)).toBeInTheDocument();
  });
  test('it renders Details link correctly', () => {
    render(<Options />);
    expect(screen.getByText(/Details/)).toBeInTheDocument();
  });
  test('it renders options page correctly', () => {
    const component = Options;
    expect(component).toMatchSnapshot();
  });
});
