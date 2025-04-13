import axios from "axios";

interface type {
    url: string;
    data: object;
    params?: Record<string, any>;
}
interface typeGet {
    url: string;
    params?: Record<string, any>;
}

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

// Requests
export const getRequest = async ({ url, params = {} }: typeGet) => {
    try {
        const res = await axios.get(url, { params });
        return res.data;
    } catch (err) {
        return err;
    }
};

//  OR =====> In case of Redux Thunk  <======
//  export const getRequest = async ({ url, params = {}, thunkApi }) => {
//    try {
//      const res = await axios.get(url, { params });
//      return res.data;
//    } catch (err) {
//      return thunkApi.rejectWithValue(err);
//      return err;
//    };
//  };

export const postRequest = async ({ url, data = {}, params = {} }: type) => {
    try {
        const res = await axios.post(url, data, { params });
        return res.data;
    } catch (err) {
        return err;
    }
};

export const postFormDataRequest = async ({ url, data = {}, params = {} }: type) => {
    try {
        const res = await axios.post(url, data, {
            params,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (err) {
        return err;
    }
};

export const patchRequest = async ({ url, data = {}, params = {} }: type) => {
    try {
        const res = await axios.patch(url, data, { params });
        return res.data;
    } catch (err) {
        return err;
    }
};

export const patchFormDataRequest = async ({ url, data = {}, params = {} }: type) => {
    try {
        const res = await axios.patch(url, data, {
            params,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (err) {
        return err;
    }
};

export const putRequest = async ({ url, data = {}, params = {} }: type) => {
    try {
        const res = await axios.put(url, data, { params });
        return res.data;
    } catch (err) {
        return err;
    }
};

export const deleteRequest = async ({ url, params = {} }: type) => {
    try {
        const res = await axios.delete(url, { params });
        return res.data;
    } catch (err) {
        return err;
    }
};
