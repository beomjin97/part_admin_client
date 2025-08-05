import axios from "axios";

const baseURL = 'http://localhost:4000';
const timeout = 3000;

export const axiosInstance = axios.create({baseURL, timeout});