import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login', () => {
  test('Should render the Login page', () => {
    render(<Login />);
    expect(screen.getByText('BEM VINDO')).toBeInTheDocument();
  });

  test('Should render the inputs labels', () => {
    render(<Login />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Senha')).toBeInTheDocument();
  });

  test('Should render the image', () => {
    render(<Login />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('Should render redirect text', () => {
    render(<Login />);
    const registerRedirect = screen.getByText(
      'Não tem uma Conta? Registre aqui',
    );
    expect(registerRedirect).toBeInTheDocument();
    expect(registerRedirect).toHaveAttribute('href', '/register');
  });

  test('Should render the button', () => {
    render(<Login />);
    const homeRedirect = screen.getByText('Logar');
    expect(homeRedirect).toBeInTheDocument();
    expect(homeRedirect).toHaveAttribute('href', '/home');
  });
});
