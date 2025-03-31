import { render, screen, fireEvent } from '@testing-library/react';
import DadosUsuario from './DadosUsuario';

const mockOnClose = jest.fn();

describe('DadosUsuario Component', () => {
    test('renders user data correctly', () => {
        render(<DadosUsuario open={true} onClose={mockOnClose} />);
        expect(screen.getByText('Usuário Teste')).toBeInTheDocument();
        expect(screen.getByDisplayValue('usuario@example.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('senha123')).toBeInTheDocument();
    });

    test('closes the drawer when close button is clicked', () => {
        render(<DadosUsuario open={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByRole('button', { name: /fechar/i }));
        expect(mockOnClose).toHaveBeenCalled();
    });

    test('toggles password visibility', () => {
        render(<DadosUsuario open={true} onClose={mockOnClose} />);
        const toggleButton = screen.getByRole('button', { name: /alternar visibilidade da senha/i });
        fireEvent.click(toggleButton);

        // @ts-ignore
        expect(screen.getByDisplayValue('senha123').type).toBe('text');

        fireEvent.click(toggleButton);
        // @ts-ignore
        expect(screen.getByDisplayValue('senha123').type).toBe('password');
    });

    test('opens and closes the logout modal', () => {
        render(<DadosUsuario open={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('Sair'));
        expect(screen.getByText('Confirmar Saída')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Cancelar'));
        expect(screen.queryByText('Confirmar Saída')).not.toBeInTheDocument();
    });

    test('opens and closes the delete account modal', () => {
        render(<DadosUsuario open={true} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('Excluir Conta'));
        expect(screen.getByText('Confirmar Exclusão')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Cancelar'));
        expect(screen.queryByText('Confirmar Exclusão')).not.toBeInTheDocument();
    });
});
