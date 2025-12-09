import axios from 'axios';

const backendUrl = process.env.NEXT_BACKEND_URL + process.env.NEXT_API_URL || 'http://localhost:5000/api/v1';

export const getMenu = async () => {
    try {
        const response = await axios.get(`${backendUrl}/menu`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
}