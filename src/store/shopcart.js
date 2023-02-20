import { reqCartList, reqDeleteCartById, reqChangeCheckStateById } from "@/api";

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
  async deleteCartBySkuId({ commit }, skuId) {
    const result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(
        new Error(`error on delete item from cart list ${skuId}`)
      );
    }
  },
  async changeCheckStateById({ commit }, { skuId, isChecked }) {
    const result = await reqChangeCheckStateById(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(
        new Error(`error change checkstate on skuid ${skuId}`)
      );
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    const cartInfoList = getters.cartList.cartInfoList;
    let promiseAll = [cartInfoList.length];
    cartInfoList.forEach((item) => {
      let promise =
        item.isChecked === 1 ? dispatch("deleteCartBySkuId", item.skuId) : "";
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
  changeAllCartCheckState({ dispatch, getters }, isChecked) {
    const cartInfoList = getters.cartList.cartInfoList;
    let promiseAll = [cartInfoList.length];
    cartInfoList.forEach((item) => {
      let promise =
        item.isChecked !== isChecked
          ? dispatch("changeCheckStateById", { skuId: item.skuId, isChecked })
          : "";
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
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
