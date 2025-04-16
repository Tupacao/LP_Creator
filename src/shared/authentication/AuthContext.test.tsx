import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider, useAuth } from './AuthContext';
import authService from '../services/AuthService';
import userService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

// Mocks
jest.mock('../services/AuthService');
jest.mock('../services/UserService');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const queryClient = new QueryClient();

const renderWithAuthProvider = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>,
  );
};

// TestComponent usado para acessar o contexto
const TestComponent = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth();

  return (
    <div>
      <div>User: {user ? JSON.stringify(user) : 'null'}</div>
      <div>Is Authenticated: {isAuthenticated.toString()}</div>
      <div>Is Loading: {isLoading.toString()}</div>
      <div>Error: {error}</div>
    </div>
  );
};

describe('AuthContext Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('initializes with correct default values', () => {
    renderWithAuthProvider(<TestComponent />);

    expect(screen.getByText('User: null')).toBeInTheDocument();
    expect(screen.getByText('Is Authenticated: false')).toBeInTheDocument();
    expect(screen.getByText('Is Loading: false')).toBeInTheDocument();
    expect(screen.getByText('Error:')).toBeInTheDocument();
  });

  test('fetches user data on mount if userId exists in localStorage', async () => {
    localStorage.setItem('userId', '123');
    (userService.getUser as jest.Mock).mockResolvedValue({
      id: '123',
      nome: 'Teste',
      email: 'teste@example.com',
      senha: 'senha123',
    });

    renderWithAuthProvider(<TestComponent />);

    await screen.findByText(
      'User: {"id":"123","nome":"Teste","email":"teste@example.com","senha":"senha123"}',
    );
    expect(screen.getByText('Is Authenticated: true')).toBeInTheDocument();
    expect(userService.getUser).toHaveBeenCalledWith('123');
  });

  test('sets error state if fetching user data fails', async () => {
    localStorage.setItem('userId', '123');
    (userService.getUser as jest.Mock).mockRejectedValue(
      new Error('Erro ao buscar usuário'),
    );

    renderWithAuthProvider(<TestComponent />);

    await screen.findByText('Error: Erro ao buscar usuário');
    expect(screen.getByText('Is Authenticated: false')).toBeInTheDocument();
    expect(userService.getUser).toHaveBeenCalledWith('123');
  });

  test('login function updates state and navigates to /home on successful login', async () => {
    (authService.login as jest.Mock).mockResolvedValue({
      id: '456',
      nome: 'Teste Login',
      email: 'teste2@example.com',
      senha: 'senha456',
    });
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const LoginComponent = () => {
      const { login, isAuthenticated, user } = useAuth();
      const handleClick = async () => {
        await login({ email: 'teste2@example.com', senha: 'senha456' });
      };
      return (
        <div>
          <button onClick={handleClick}>Login</button>
          <div>Is Authenticated: {isAuthenticated.toString()}</div>
          <div>User: {user ? JSON.stringify(user) : 'null'}</div>
        </div>
      );
    };

    renderWithAuthProvider(<LoginComponent />);

    await act(async () => {
      fireEvent.click(screen.getByText('Login'));
    });

    expect(localStorage.getItem('userId')).toBe('456');
    expect(screen.getByText('Is Authenticated: true')).toBeInTheDocument();
    expect(navigateMock).toHaveBeenCalledWith('/home');
    expect(authService.login).toHaveBeenCalledWith({
      email: 'teste2@example.com',
      senha: 'senha456',
    });
  });

  test('register function registers user and navigates to /login', async () => {
    (authService.register as jest.Mock).mockResolvedValue({});
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const RegisterComponent = () => {
      const { register } = useAuth();
      const handleClick = async () => {
        await register({
          nome: 'Novo',
          email: 'novo@example.com',
          senha: 'senha',
        });
      };
      return <button onClick={handleClick}>Register</button>;
    };

    renderWithAuthProvider(<RegisterComponent />);

    await act(async () => {
      fireEvent.click(screen.getByText('Register'));
    });

    expect(navigateMock).toHaveBeenCalledWith('/login');
    expect(authService.register).toHaveBeenCalledWith({
      nome: 'Novo',
      email: 'novo@example.com',
      senha: 'senha',
    });
  });

  test('logout function clears localStorage, updates state, and navigates to /login', () => {
    localStorage.setItem('userId', '789');
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    const LogoutComponent = () => {
      const { logout } = useAuth();
      return <button onClick={logout}>Logout</button>;
    };

    renderWithAuthProvider(<LogoutComponent />);
    fireEvent.click(screen.getByText('Logout'));

    expect(localStorage.getItem('userId')).toBeNull();
    expect(navigateMock).toHaveBeenCalledWith('/login');
  });
});
