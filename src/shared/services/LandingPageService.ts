import axios, { AxiosError } from 'axios';
import { SiteData } from '../../pages/landingPage/types';

const API_URL = 'http://localhost:3001';

const getSiteData = async (id: string): Promise<SiteData> => {
    try {
        const response = await axios.get<SiteData>(`${API_URL}/sites/${id}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Erro ao buscar dados do site:', error.message);
        } else {
            console.error('Erro inesperado:', error);
        }
        throw error;
    }
};

const getUserSites = async (userId: string): Promise<SiteData[]> => {
    try {
        const response = await axios.get<SiteData[]>(`${API_URL}/sites?userId=${userId}`);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Erro ao buscar sites do usuário:', error.message);
        } else {
            console.error('Erro inesperado:', error);
        }
        throw error;
    }
};

const deleteSite = async (siteId: string): Promise<void> => {
    try {
        await axios.delete(`${API_URL}/sites/${siteId}`);
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error('Erro ao excluir site:', error.message);
        } else {
            console.error('Erro inesperado:', error);
        }
        throw error;
    }
};

const LandingPageService = {
    getSiteData,
    getUserSites,
    deleteSite,
};

export default LandingPageService;