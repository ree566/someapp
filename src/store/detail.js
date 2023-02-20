import { reqGoodsInfo, reqAddOrUpdateShoppingCart } from "@/api";
import { getUUID } from "@/utils/uuid_token";

const state = {
  goodInfo: {},
  uuid_token: getUUID(),
};
const mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
const actions = {
  async getGoodsInfo({ commit }, skuid) {
    const result = await reqGoodsInfo(skuid);
    if (result.code === 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
  async addOrUpdateShoppingCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrUpdateShoppingCart(skuId, skuNum);
    if (result.code === 200) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Fail"));
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};

export default { state, mutations, actions, getters };
