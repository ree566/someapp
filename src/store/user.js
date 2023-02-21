import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqUserLogout,
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";

const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  USERLOGOUT(state) {
    state.token = "";
    state.userInfo = {};
    removeToken();
  },
};
const actions = {
  async getCode({ commit }, phone) {
    const result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(
        new Error(`Something error when get code from phone ${phone}`)
      );
    }
  },
  async userRegister({ commit }, data) {
    const result = await reqUserRegister(data);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error(result.message || "Register fail"));
    }
  },
  async userLogin({ commit }, data) {
    const result = await reqUserLogin(data);
    if (result.code === 200) {
      commit("USERLOGIN", result.data.token);
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error(result.message || "Login fail"));
    }
  },
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 200) {
      commit("GETUSERINFO", result.data);
      return "data";
    } else {
      return Promise.reject(new Error(result.message || "Get user info fail"));
    }
  },
  async userLogout({ commit }) {
    const result = await reqUserLogout();
    if (result.code === 200) {
      commit("USERLOGOUT");
      return "ok";
    } else {
      return Promise.reject(new Error(result.message || "Logout user fail"));
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
