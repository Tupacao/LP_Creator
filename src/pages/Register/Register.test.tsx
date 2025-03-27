import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from './Register';

describe('Register', () => {
  test('Should render the Register page', () => {
    render(<Register />);
    expect(screen.getByText('CRIE SUA CONTA')).toBeInTheDocument();
  });

  test('Should render buttons', () => {
    render(<Register />);
    expect(screen.getByText('Criar conta')).toBeInTheDocument();
    expect(screen.getByLabelText('Nome')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirme sua senha')).toBeInTheDocument();
  });

  test('Should redirect to Logion page', () => {
    render(<Register />);
    const loginRedirect = screen.getByText('Já tem uma conta? Faça login');
    expect(loginRedirect).toBeInTheDocument();
    expect(loginRedirect).toHaveAttribute('href', '/login');
  });

  test('Should redirect to Home page', () => {
    render(<Register />);
    const homeRedirect = screen.getByText('Criar conta');
    expect(homeRedirect).toBeInTheDocument();
    expect(homeRedirect).toHaveAttribute('href', '/home');
  });

  test('Should load logo image', () => {
    render(<Register />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg',
    );
  });
});
