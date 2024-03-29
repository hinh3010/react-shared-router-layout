import axios from "axios";

// console.log(process.env)

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, params = {}) => {
    const response = await axiosClient.get(url, params);
    return response.data
}

export default axiosClient