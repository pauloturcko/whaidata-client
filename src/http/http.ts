import axios from "axios";
import Cookies from "js-cookie";

export const http = axios.create({
  baseURL: "https://whaidata-api-prod.up.railway.app",
});

http.interceptors.request.use((config) => {
  const token = Cookies.get("whaidata.token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      error.config.url !== "/users/login" &&
      window.location.pathname !== "/login"
    ) {
      Cookies.remove("whaidata.token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
