import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, params = {}) => {
    const response = await axiosClient.get(url, params);
    return response.data
}

export default axiosClient