import { reqGetSearchResult } from "@/api";

const state = {
  searchresult: [],
};
const mutations = {
  GETSEARCHRESULT(state, value) {
    state.searchresult = value;
  },
};
const actions = {
  async getSearchResult({ commit }, params = {}) {
    const result = await reqGetSearchResult(params);
    if (result.code === 200) {
      commit("GETSEARCHRESULT", result.data);
    }
  },
};
const getters = {
  goodsList(state) {
    return state.searchresult.goodsList || [];
  },
  attrsList(state) {
    return state.searchresult.attrsList || [];
  },
  trademarkList(state) {
    return state.searchresult.trademarkList || [];
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
