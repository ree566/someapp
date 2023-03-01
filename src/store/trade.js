import { reqUserAddressInfo, reqOrderInfo } from "@/api";

const state = {
  address: [],
  orderInfo: {},
};

const mutations = {
  GETUSERADDRESSINFO(state, address) {
    state.address = address;
  },
  GETORDERINFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  },
};

const actions = {
  async getUserAddressInfo({ commit }) {
    const result = await reqUserAddressInfo();
    if (result.code === 200) {
      commit("GETUSERADDRESSINFO", result.data);
    }
  },
  async getOrderInfo({ commit }) {
    const result = await reqOrderInfo();
    if (result.code === 200) {
      commit("GETORDERINFO", result.data);
    }
  },
};

const getters = {};

export default { state, mutations, actions, getters };
