import axios from 'axios';
import { useStore } from '../store/index';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const store = useStore();
  store.isLoading = true;
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  const store = useStore();
  store.isLoading = false;
  return response;
});

export default axiosInstance;
