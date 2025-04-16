import { fireEvent, render, screen } from '@testing-library/react';
import TitleText from './TitleText';

describe('TitleText', () => {
  test('Should render TitleText', () => {
    render(<TitleText titleText='Teste' setTitle={() => {}} />);

    expect(screen.getByPlaceholderText('Entre em Contato')).toBeInTheDocument();
  });

  test('Should call setTitle on change', () => {
    const setTitle = jest.fn();
    render(<TitleText titleText='Teste' setTitle={setTitle} />);

    const titleText = screen.getByPlaceholderText('Entre em Contato');
    expect(titleText).toBeInTheDocument();
    fireEvent.change(titleText, { target: { value: 'Novo Titulo' } });

    expect(setTitle).toHaveBeenCalledWith('Novo Titulo');
  });
});
