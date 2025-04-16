import { render, screen } from '@testing-library/react';
import ElementHeader from './ElementHeader';

describe('ElementHeader', () => {
  test('should render correctly', () => {
    const elementMockProp = {
      titleText: '',
      setTitleText: jest.fn(),
      description: '',
      setDescription: jest.fn(),
      buttonText: '',
      setButtonText: jest.fn(),
    };

    render(ElementHeader(elementMockProp));

    const header = screen.getAllByTestId(/header/);

    expect(header.length).toBe(2);

    expect(header[0]).toHaveAttribute('data-testid', 'header1');
    expect(header[1]).toHaveAttribute('data-testid', 'header2');
  });
});
