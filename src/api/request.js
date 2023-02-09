import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const req = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

req.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

req.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("Fail"));
  }
);

export default req;
