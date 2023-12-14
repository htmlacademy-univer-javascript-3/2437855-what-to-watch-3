import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance =>
  axios.create({
    baseURL: baseURL,
    timeout: REQUEST_TIMEOUT,
  });
