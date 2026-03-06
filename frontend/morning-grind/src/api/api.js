import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = config.headers || {};
    if (token && token !== "null" && token !== "undefined") {
      config.headers["Authorization"] = `Bearer ${token}`;
      console.log("Authorization header set with token");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
