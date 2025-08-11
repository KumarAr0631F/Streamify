import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" ? "https://streamify-backend-27qx.onrender.com/api" : "/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default axiosInstance;