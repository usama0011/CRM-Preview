// src/utils/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://54.243.4.152:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const tenantId = localStorage.getItem("tenantId");
  if (tenantId) {
    config.headers["x-tenant-id"] = tenantId;
  }
  return config;
});

export default api;
