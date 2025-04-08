import { render, screen } from '@testing-library/react';
import ElementSection from './ElementSection';

describe('ElementSection', () => {
  test('Should render ElementSection', () => {
    render(<ElementSection />);

    const section = screen.getAllByTestId(/section/);
    expect(section.length).toBe(4);

    expect(section[0]).toHaveAttribute('data-testid', 'section1');
    expect(section[1]).toHaveAttribute('data-testid', 'section2');
    expect(section[2]).toHaveAttribute('data-testid', 'section3');
    expect(section[3]).toHaveAttribute('data-testid', 'section4');
  });
});
