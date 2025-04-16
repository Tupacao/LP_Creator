import { fireEvent, render, screen } from '@testing-library/react';
import ButtonText from './ButtonText';

describe('ButtonText', () => {
  test('ButtonText renders correctly with icon', () => {
    render(
      <ButtonText
        hasIcon={true}
        buttonText='ENTRE EM CONTATO'
        setButtonText={() => {}}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ENTRE EM CONTATO');

    expect(screen.getByTestId('font-icon')).toBeInTheDocument();
  });

  test('ButtonText renders correctly without icon', () => {
    render(
      <ButtonText
        hasIcon={false}
        buttonText='ENTRE EM CONTATO'
        setButtonText={() => {}}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('ENTRE EM CONTATO');

    expect(screen.queryByTestId('font-icon')).toBeNull();
  });

  test('ButtonText calls setButtonText when changed', () => {
    const setButtonTextMock = jest.fn();
    render(
      <ButtonText
        hasIcon={true}
        buttonText='ENTRE EM CONTATO'
        setButtonText={setButtonTextMock}
      />,
    );

    const textField = screen.getByPlaceholderText('ENTRE EM CONTATO');
    expect(textField).toBeInTheDocument();

    fireEvent.change(textField, { target: { value: 'Novo Texto' } });

    expect(setButtonTextMock).toHaveBeenCalledWith('Novo Texto');
  });
});
