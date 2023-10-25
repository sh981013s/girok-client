import axios, { AxiosError } from 'axios';
import { getCookie, setCookie } from '../utils/cookie.ts';

export const BASE_URL = import.meta.env.VITE_API_SERVER;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let globalRetryCount = 0;

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (globalRetryCount >= 3) {
      window.dispatchEvent(new Event('unauthorized'));
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.message === 'Expired Token'
      // msg 확인
    ) {
      globalRetryCount++;

      const refreshToken = getCookie('refresh_token');

      try {
        const { data } = await client.post('/auth/refresh_token', { refreshToken });

        setCookie('access_token', data.accessToken);

        return client(originalRequest);
      } catch (reissueError) {
        const axiosError = reissueError as AxiosError<{ message: 'string' }>;

        if (axiosError.response?.status === 401) {
          window.dispatchEvent(new Event('unauthorized'));
          return Promise.reject(reissueError);
        } else {
          return Promise.reject(reissueError);
        }
      }
    } else if (
      error.response &&
      error.response.status === 501 &&
      error.response.data.message.includes(
        'Row was updated or deleted by another transaction',
      )
    ) {
      return null;
    } else {
      return Promise.reject(error);
    }
  },
);

export default client;
