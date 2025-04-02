import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const API_URL = 'http://localhost:3001';

interface UserData {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

// Função para registrar um usuário
export const useRegister = () => {
    const queryClient = useQueryClient();
    return useMutation(
        async (userData: { nome: string; email: string; senha: string }): Promise<UserData> => {
            const response = await axios.post<UserData>(`${API_URL}/users`, userData);
            return response.data;
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
            },
        }
    );
};

// Função para fazer login (alterada para useMutation)
export const useLogin = () => {
    return useMutation(
        async (credentials: { email: string; senha: string }): Promise<UserData | null> => {
            const { email, senha } = credentials;

            if (!email || !senha) return null;

            // eslint-disable-next-line no-useless-catch
            try {
                const response = await axios.get<UserData[]>(`${API_URL}/users?email=${email}`);
                const user = response.data[0];

                if (user && user.senha === senha) {
                    return user;
                }
                throw new Error('Credenciais inválidas.');
            } catch (error) {
                throw error;
            }
        }
    );
};

const authService = {
    useRegister,
    useLogin,
};

export default authService;