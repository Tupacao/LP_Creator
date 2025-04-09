import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/AuthService.ts';
import userService from '../services/UserService.ts';
import { useQueryClient } from 'react-query';

interface AuthContextProps {
    user: UserData | null;
    login: (credentials: { email: string; senha: string }) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string;
    register: (userData: { nome: string; email: string; senha: string }) => Promise<void>;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

interface UserData {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: async () => { },
    logout: () => { },
    isAuthenticated: false,
    isLoading: false,
    error: '',
    register: async () => { },
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<UserData | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const checkAuthentication = async () => {
            setIsLoading(true);
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const userData = await userService.getUser(userId);
                    setUser(userData);
                    setIsAuthenticated(true);
                }
            } catch (error: any) {
                setError(error.message || 'Erro ao verificar autenticação.');
            } finally {
                setIsLoading(false);
            }
        };

        checkAuthentication();
    }, []);

    const login = async (credentials: { email: string; senha: string }) => {
        setIsLoading(true);
        setError('');
        try {
            const userData = await authService.login(credentials);
            if (userData) {
                localStorage.setItem('userId', String(userData.id));
                setUser(userData);
                setIsAuthenticated(true);
                navigate('/home');
            } else {
                setError('Falha ao fazer login.');
                setIsAuthenticated(false);
            }
        } catch (error: any) {
            setError(error.message || 'Erro ao fazer login.');
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    };

    const register = async (userData: { nome: string; email: string; senha: string }) => {
        setIsLoading(true);
        setError('');
        try {
            await authService.register(userData);
            queryClient.invalidateQueries('users');
            navigate('/login');
        } catch (error: any) {
            setError(error.message || 'Erro ao registrar usuário.');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('userId');
        setUser(null);
        setIsAuthenticated(false);
        navigate('/login');
    };

    const value = {
        user,
        login,
        logout,
        isAuthenticated,
        isLoading,
        error,
        register,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};