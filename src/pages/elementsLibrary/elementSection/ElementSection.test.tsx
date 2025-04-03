import { render, screen } from '@testing-library/react';
import ElementSection from './ElementSection';

describe('ElementSection', () => {
  test('Should render ElementSection', () => {
    render(<ElementSection />);
    
    const section = screen.getAllByTestId(/section/); 
    expect(section.length).toBe(4);

    expect(screen.getByTestId('section1')).toBeInTheDocument();
    expect(screen.getByTestId('section2')).toBeInTheDocument();
    expect(screen.getByTestId('section3')).toBeInTheDocument();
    expect(screen.getByTestId('section4')).toBeInTheDocument();
    
    expect(section[0]).toHaveAttribute('data-testid', 'section1');
    expect(section[1]).toHaveAttribute('data-testid', 'section2');
    expect(section[2]).toHaveAttribute('data-testid', 'section3');
    expect(section[3]).toHaveAttribute('data-testid', 'section4');
  });

});