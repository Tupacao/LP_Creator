import { render, screen } from '@testing-library/react';
import ButtonText from './ButtonText';

describe('ButtonText', () => {
  test('ButtonText renders correctly with icon', () => {
    render(<ButtonText hasIcon={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ENTRE EM CONTATO');

    expect(screen.getByTestId('font-icon')).toBeInTheDocument();
  });

  test('ButtonText renders correctly without icon', () => {
    render(<ButtonText hasIcon={false} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ENTRE EM CONTATO');

    expect(screen.queryByTestId('font-icon')).toBeNull();
  });
});
