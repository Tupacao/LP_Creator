import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });

  it('renderiza o cabeçalho com os elementos corretos', () => {
    const logo = screen.getByRole('img', { name: 'LP Creator Logo' });
    expect(logo).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^Creator$/ })).toBeInTheDocument(); // Garante que o texto seja exatamente "Creator"
    expect(screen.getByRole('link', { name: 'Sites' })).toBeInTheDocument();

    const userButton = screen.getByTestId('user-button');
    expect(userButton).toBeInTheDocument();
  });

  it('abre o drawer ao clicar no botão do usuário', () => {
    const userButton = screen.getByTestId('user-button');
    fireEvent.click(userButton);

    expect(screen.getByRole('presentation')).toBeVisible();
  });

  it('fecha o drawer ao pressionar Escape', () => {
    fireEvent.click(screen.getByTestId('user-button'));
    expect(screen.getByRole('presentation')).toBeVisible();

    fireEvent.click(document.body);

    waitFor(() => expect(screen.queryByRole('presentation')).not.toBeVisible());
  });
});
