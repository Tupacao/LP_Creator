import axios from 'axios';

const API_URL = 'http://localhost:3001';

interface UserData {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

const getUser = async (userId: number): Promise<UserData> => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get<UserData>(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};

const deleteAccount = async (userId: number): Promise<void> => {
    // eslint-disable-next-line no-useless-catch
    try {
        await axios.delete(`${API_URL}/users/${userId}`);
    } catch (error: any) {
        throw error;
    }
};

const UserService = {
    getUser,
    deleteAccount,
};

export default UserService;