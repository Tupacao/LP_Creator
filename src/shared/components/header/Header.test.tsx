import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('renderiza o cabeçalho com os elementos corretos', () => {
    const logo = screen.getByRole('img', { name: /LP Creator Logo/i });
    expect(logo).toBeInTheDocument();

    // Verifica se os links de navegação são renderizados
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Creator/i)).toBeInTheDocument();
    expect(screen.getByText(/Sites/i)).toBeInTheDocument();

    const userButton = screen.getByTestId('user-button');
    expect(userButton).toBeInTheDocument();

  });

  it('navegação funciona corretamente', async () => {
    fireEvent.click(screen.getByRole('link', { name: /Home/i }));
  });
});