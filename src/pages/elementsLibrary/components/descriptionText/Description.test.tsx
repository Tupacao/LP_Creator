import { render, screen } from '@testing-library/react';
import DescriptionText from './DescriptionText';

describe('DescriptionText', () => {
  test('Should render DescriptionText with normal text', () => {
    render(<DescriptionText descriptionText='teste' isStrong={false} />);

    const descriptionText = screen.getByTestId('description-text');

    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveTextContent('teste');
    expect(descriptionText).toHaveStyle('font-weight: normal');
  });

  test('Should render DescriptionText with bold text', () => {
    render(<DescriptionText descriptionText='teste' isStrong={true} />);

    const descriptionText = screen.getByTestId('description-text');

    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveTextContent('teste');
    expect(descriptionText).toHaveStyle('font-weight: 700');
  });
});
