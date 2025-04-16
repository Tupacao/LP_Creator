import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DadosUsuario from './DadosUsuario';
import { useAuth } from '../../authentication/AuthContext';
import userService from '../../services/UserService';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

// Mocks
jest.mock('../../authentication/AuthContext', () => ({
  useAuth: jest.fn(),
}));
jest.mock('../../services/UserService');

const mockOnClose = jest.fn();
const mockLogout = jest.fn();

describe('DadosUsuario Component', () => {
  const queryClient = new QueryClient();

  const renderWithProviders = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <DadosUsuario open={true} onClose={mockOnClose} />
        </MemoryRouter>
      </QueryClientProvider>,
    );
  };

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      logout: mockLogout,
    });
    localStorage.setItem('userId', '1');
    (userService.getUser as jest.Mock).mockResolvedValue({
      id: '1',
      nome: 'Usuário Teste',
      email: 'usuario@example.com',
      senha: 'senha123',
    });
    (userService.deleteAccount as jest.Mock).mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('renders user data correctly', async () => {
    renderWithProviders();
    await waitFor(() => {
      expect(screen.getByText('Usuário Teste')).toBeInTheDocument();
    });
    expect(screen.getByDisplayValue('usuario@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('senha123')).toBeInTheDocument();
  });

  test('closes the drawer when close button is clicked', () => {
    renderWithProviders();
    const closeBtn = screen.getByRole('button', { name: /fechar/i });
    fireEvent.click(closeBtn);
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('toggles password visibility', async () => {
    renderWithProviders();
    await waitFor(() => screen.getByDisplayValue('senha123'));
    const toggleBtn = screen.getByLabelText(/alternar visibilidade da senha/i);
    expect(screen.getByDisplayValue('senha123')).toHaveAttribute(
      'type',
      'password',
    );
    fireEvent.click(toggleBtn);
    expect(screen.getByDisplayValue('senha123')).toHaveAttribute(
      'type',
      'text',
    );
  });

  test('opens and closes sair modal', async () => {
    renderWithProviders();
    const sairBtn = screen.getByRole('button', { name: /sair/i });
    fireEvent.click(sairBtn);
    expect(await screen.findByText(/confirmar saída/i)).toBeInTheDocument();

    const cancelarBtn = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(cancelarBtn);
    await waitFor(() => {
      expect(
        screen.queryByText(/tem certeza que deseja sair/i),
      ).not.toBeInTheDocument();
    });
  });

  test('confirms sair and calls logout/onClose', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: /sair/i }));
    const confirmarBtn = await screen.findByRole('button', {
      name: /confirmar/i,
    });
    fireEvent.click(confirmarBtn);
    expect(mockLogout).toHaveBeenCalled();
    expect(mockOnClose).toHaveBeenCalled();
  });

  test('opens and closes excluir modal', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: /excluir conta/i }));
    expect(await screen.findByText(/confirmar exclusão/i)).toBeInTheDocument();

    const cancelarBtn = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(cancelarBtn);
    await waitFor(() => {
      expect(
        screen.queryByText(/esta ação é irreversível/i),
      ).not.toBeInTheDocument();
    });
  });

  test('confirms excluir conta and calls deleteAccount, logout, and onClose', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: /excluir conta/i }));
    const excluirBtn = await screen.findByRole('button', {
      name: /^excluir$/i,
    });
    fireEvent.click(excluirBtn);

    await waitFor(() => {
      expect(userService.deleteAccount).toHaveBeenCalledWith('1');
      expect(mockLogout).toHaveBeenCalled();
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
