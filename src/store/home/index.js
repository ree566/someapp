import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
  categorylist: [],
  bannerlist: [],
  floorlist: [],
};
const mutations = {
  GETCATEGORELIST(state, value) {
    state.categorylist = value;
  },
  GETBANNERLIST(state, value) {
    state.bannerlist = value;
  },
  GETFLOORLIST(state, value) {
    state.floorlist = value;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("GETCATEGORELIST", result.data);
    }
  },
  async getBannerList({ commit }) {
    const result = await reqGetBannerList();
    if (result.code === 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    const result = await reqGetFloorList();
    if (result.code === 200) {
      commit("GETFLOORLIST", result.data);
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
