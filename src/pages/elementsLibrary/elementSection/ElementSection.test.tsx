import { render, screen } from '@testing-library/react';
import ElementSection from './ElementSection';

describe('ElementSection', () => {
  test('Should render ElementSection', () => {
    const elementMockProp = {
      titleText: '',
      setTitleText: jest.fn(),
      buttonText: '',
      setButtonText: jest.fn(),
      description: '',
      setDescription: jest.fn(),
      titleBox: [
        {
          titleBox: 'Title 1',
          descriptionBox: 'Description 1',
          buttonBox: 'Button 1',
        },
      ],
      setTitleBox: jest.fn(),
    };

    render(ElementSection(elementMockProp));

    const section = screen.getAllByTestId(/section/);
    expect(section.length).toBe(4);

    expect(section[0]).toHaveAttribute('data-testid', 'section1');
    expect(section[1]).toHaveAttribute('data-testid', 'section2');
    expect(section[2]).toHaveAttribute('data-testid', 'section3');
    expect(section[3]).toHaveAttribute('data-testid', 'section4');
  });
});
