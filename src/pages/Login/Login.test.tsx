import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import { useAuth } from '../../shared/authentication/AuthContext';

// Mock do AuthContext
jest.mock('../../shared/authentication/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Login Component', () => {
  const mockLogin = jest.fn();
  const mockIsLoading = false;
  const mockError = '';

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: mockIsLoading,
      error: mockError,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render the Login page', () => {
    render(<Login />);
    expect(screen.getByText('BEM VINDO')).toBeInTheDocument();
  });

  test('Should render the inputs labels', () => {
    render(<Login />);
    const emailLabel = screen.getByText('Email');
    const passwordLabel = screen.getByText('Senha');

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
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

  test('Should render the button with correct text', () => {
    render(<Login />);
    const homeRedirect = screen.getByText('Logar');
    expect(homeRedirect).toBeInTheDocument();
  });

  test('calls login function with correct credentials on form submission', async () => {
    render(<Login />);
    const emailInput = screen.getByTestId('login-email-input') as HTMLInputElement;
    const passwordInput = screen.getByTestId('login-password-input') as HTMLInputElement;
    const loginButton = screen.getByText('Logar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith({ email: 'test@example.com', senha: 'password123' });
  });

  test('displays error message when login fails', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: false,
      error: 'Credenciais inválidas',
    });

    render(<Login />);
    expect(screen.getByText('Credenciais inválidas')).toBeInTheDocument();
  });

  test('disables the login button while loading', () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: true,
      error: '',
    });

    render(<Login />);
    const loginButton = screen.getByText('Carregando...');
    expect(loginButton).toBeDisabled();
  });
});