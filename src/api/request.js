import axios from "axios";
import nprogress from "nprogress";
import store from "@/store";
import "nprogress/nprogress.css";

const req = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

req.interceptors.request.use((config) => {
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
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
