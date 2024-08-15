import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://blog-backend.test/api',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,  
});

export default axiosInstance;