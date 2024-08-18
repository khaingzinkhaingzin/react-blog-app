import axiosInstance from "../../axios";
import axios from "axios";

export const getCsrfToken = async () => {
    const token = await axios.get('http://localhost:8000/sanctum/csrf-cookie');

    return token;
};
export const loginUser = async (crendentials) => {
    const response = await axiosInstance.post('/login', crendentials);

    return response.data;
}

export const getUser = async () => {
    let response = await axiosInstance.get('/user');
        // .then(response => setUser(response.data))
        // .catch(() => setUser(null));
            
    return response.data;
}