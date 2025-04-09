import { fireEvent, render, screen } from '@testing-library/react';
import PreCreator from './PreCreator';
import { MemoryRouter } from 'react-router-dom';

describe('PreCreatro', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PreCreator />
      </MemoryRouter>,
    );
  });

  test('Should render page', () => {
    expect(
      screen.getByText('Insira as informações da sua LP:'),
    ).toBeInTheDocument();
    expect(screen.getByText('Salvar')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome da LP')).toBeInTheDocument();
    expect(screen.getByLabelText('Descrição da LP')).toBeInTheDocument();
    expect(screen.getByLabelText('Logo')).toBeInTheDocument();
  });

  test('Button Salvar should not be able', () => {
    expect(screen.getByText('Salvar')).toHaveAttribute('tabindex', '-1');
  });

  test('Button Salvar should be able', () => {
    const nameInput = screen.getByLabelText('Nome da LP');
    const descInput = screen.getByLabelText('Descrição da LP');
    const logoInput = screen.getByLabelText('Logo');

    fireEvent.change(nameInput, { target: { value: 'Teste' } });
    fireEvent.change(descInput, { target: { value: 'Teste' } });
    fireEvent.change(logoInput, { target: { value: 'Teste' } });

    expect(screen.getByText('Salvar')).toHaveAttribute('tabindex', '0');
    expect(screen.getByText('Salvar')).toHaveAttribute('href', 'lp/Teste');
  });
});
