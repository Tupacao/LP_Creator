import { render, screen } from '@testing-library/react';
import ElementFooter from './ElementFooter';

describe('ElementFooter', () => {
  test('should render correctly', () => {
    render(<ElementFooter />);

    const footer = screen.getAllByTestId(/footer/);
    expect(footer).toHaveLength(2);

    expect(footer[0]).toHaveAttribute('data-testid', 'footer1');
    expect(footer[1]).toHaveAttribute('data-testid', 'footer2');

  });

});