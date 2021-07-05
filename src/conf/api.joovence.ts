import axios, { AxiosInstance } from "axios";

// Instance of axios
const apiJoovence: AxiosInstance = axios.create({
  baseURL: "https://tech-test.joovence.dev/api/",
});

export default apiJoovence;
