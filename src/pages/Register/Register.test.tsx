import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from './Register';
import { useAuth } from '../../shared/authentication/AuthContext';
import { MemoryRouter } from 'react-router-dom'; // Importe o MemoryRouter

// Mock do AuthContext
jest.mock('../../shared/authentication/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('Register Component', () => {
  const mockRegister = jest.fn();
  const mockIsLoading = false;
  const mockError = '';

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      isLoading: mockIsLoading,
      error: mockError,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithRouter = (ui: React.ReactElement) => {
    return render(
      <MemoryRouter>
        {' '}
        {/* Envolva o componente com o MemoryRouter */}
        {ui}
      </MemoryRouter>,
    );
  };

  test('Should render the Register page', () => {
    renderWithRouter(<Register />);
    expect(screen.getByText('CRIE SUA CONTA')).toBeInTheDocument();
  });

  test('Should render the inputs labels', () => {
    renderWithRouter(<Register />);
    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Senha')).toBeInTheDocument();
    expect(screen.getByText('Confirme sua senha')).toBeInTheDocument();
  });

  test('Should redirect to Login page', () => {
    renderWithRouter(<Register />);
    const loginRedirect = screen.getByText('Já tem uma conta? Faça login');
    expect(loginRedirect).toBeInTheDocument();
    expect(loginRedirect).toHaveAttribute('href', '/login');
  });

  test('Should render the button with correct text', () => {
    renderWithRouter(<Register />);
    const homeRedirect = screen.getByText('Criar conta');
    expect(homeRedirect).toBeInTheDocument();
  });

  test('Should load logo image', () => {
    renderWithRouter(<Register />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      'https://amopaocaseiro.com.br/wp-content/uploads/2022/08/yt-069_pao-de-queijo_receita-840x560.jpg',
    );
  });

  test('calls register function with correct data on form submission', async () => {
    renderWithRouter(<Register />);
    const nomeInput = screen.getByTestId(
      'register-nome-input',
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId(
      'register-email-input',
    ) as HTMLInputElement;
    const senhaInput = screen.getByTestId(
      'register-senha-input',
    ) as HTMLInputElement;
    const confirmSenhaInput = screen.getByTestId(
      'register-confirm-senha-input',
    ) as HTMLInputElement;
    const registerButton = screen.getByText('Criar conta');

    fireEvent.change(nomeInput, { target: { value: 'Teste' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'password123' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);

    expect(mockRegister).toHaveBeenCalledWith({
      nome: 'Teste',
      email: 'test@example.com',
      senha: 'password123',
    });
  });

  test('displays error message when passwords do not match', async () => {
    renderWithRouter(<Register />);
    const nomeInput = screen.getByTestId(
      'register-nome-input',
    ) as HTMLInputElement;
    const emailInput = screen.getByTestId(
      'register-email-input',
    ) as HTMLInputElement;
    const senhaInput = screen.getByTestId(
      'register-senha-input',
    ) as HTMLInputElement;
    const confirmSenhaInput = screen.getByTestId(
      'register-confirm-senha-input',
    ) as HTMLInputElement;
    const registerButton = screen.getByText('Criar conta');

    fireEvent.change(nomeInput, { target: { value: 'Teste' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(senhaInput, { target: { value: 'password123' } });
    fireEvent.change(confirmSenhaInput, { target: { value: 'password456' } });
    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(screen.getByText('As senhas não coincidem.')).toBeInTheDocument();
    });
  });

  test('disables the register button while loading', () => {
    (useAuth as jest.Mock).mockReturnValue({
      register: mockRegister,
      isLoading: true,
      error: '',
    });

    renderWithRouter(<Register />);
    const registerButton = screen.getByText('Criando conta...');
    expect(registerButton).toBeDisabled();
  });
});
