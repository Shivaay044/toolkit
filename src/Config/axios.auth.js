import axios from "axios";

const token = null

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error){
    return Promise.reject(error);
  }
);

export default instance;
