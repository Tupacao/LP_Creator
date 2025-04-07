import axios from 'axios';

const API_URL = 'http://localhost:3001';

interface UserData {
    id: string;
    nome: string;
    email: string;
    senha: string;
}

const register = async (userData: { nome: string; email: string; senha: string }): Promise<UserData> => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.post<UserData>(`${API_URL}/users`, userData);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

const login = async (credentials: { email: string; senha: string }): Promise<UserData> => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get<UserData[]>(`${API_URL}/users?email=${credentials.email}`);
        const user = response.data[0];

        if (user && user.senha === credentials.senha) {
            return user;
        } else {
            throw new Error('Credenciais inválidas.');
        }
    } catch (error: any) {
        throw error;
    }
};

const AuthService = {
    register,
    login,
};

export default AuthService;