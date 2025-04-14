import axios from "axios";

const to = {
    "local" : "http://127.0.0.1:8000/api/",
    "prod"  : "http://127.0.0.1:8000/api/",
}

export const url = to.local; // Change this to prod when deploying

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);
