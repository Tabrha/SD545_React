import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token && window.location.pathname !== "/") window.location.replace("/");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    localStorage.removeItem("token");
    window.location.replace("/");
  }
);

export const http = axios;
