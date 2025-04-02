import { render, screen } from '@testing-library/react';
import ElementHeader from './ElementHeader';

describe('ElementHeader', () => {
  test('should render correctly', () => {
    render(<ElementHeader />);

    expect(screen.getByTestId('header1')).toBeInTheDocument();

    render(<ElementHeader />);

    expect(screen.getByTestId('header2')).toBeInTheDocument();
  });
});
