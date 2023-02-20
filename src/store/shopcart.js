import { reqCartList } from "@/api";

const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCartList({ commit }) {
    const result = await reqCartList();
    if (result.code === 200) {
      commit("GETCARTLIST", result.data);
    }
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  cartInfoList(state) {
    return state.cartInfoList;
  },
};

export default { state, mutations, actions, getters };