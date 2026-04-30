import axios from "axios";

export const http = axios.create({
  baseURL: "https://whaidata-api-prod.up.railway.app",
});
