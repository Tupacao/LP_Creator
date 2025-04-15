import { fireEvent, render, screen } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  test('Should render TextBox', () => {
    render(
      <TextBox
        titleText={'TesteTitle'}
        setTitleText={() => {}}
        description={'TesteDescription'}
        setDescription={() => {}}
        buttonText={'TesteButton'}
        setButtonText={() => {}}
      />,
    );

    expect(screen.getByText('TesteTitle')).toBeInTheDocument();

    expect(screen.getByText('TesteDescription')).toBeInTheDocument();

    expect(screen.getByText('TesteButton')).toBeInTheDocument();
  });

  test('Should render TextBox', () => {
    const setTitleText = jest.fn();
    const setDescription = jest.fn();
    const setButtonText = jest.fn();

    render(
      <TextBox
        titleText={'TesteTitle'}
        setTitleText={setTitleText}
        description={'TesteDescription'}
        setDescription={setDescription}
        buttonText={'TesteButton'}
        setButtonText={setButtonText}
      />,
    );

    const title = screen.getByText('TesteTitle');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('TesteDescription');
    expect(description).toBeInTheDocument();

    const button = screen.getByText('TesteButton');
    expect(button).toBeInTheDocument();

    fireEvent.change(title, { target: { value: 'Novo Title' } });
    fireEvent.change(description, { target: { value: 'Nova description' } });
    fireEvent.change(button, { target: { value: 'Novo Button' } });

    expect(setTitleText).toHaveBeenCalledWith('Novo Title');
    expect(setDescription).toHaveBeenCalledWith('Nova description');
    expect(setButtonText).toHaveBeenCalledWith('Novo Button');
  });
});
