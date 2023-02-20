import req from "./request";
import mockReq from "./mockAjax";

///api/product/getBaseCategoryList GET no param

export const reqCategoryList = () =>
  mockReq({ url: "/product/getBaseCategoryList", method: "GET" });

export const reqGetBannerList = () =>
  mockReq({ url: "/banner", method: "GET" });

export const reqGetFloorList = () => mockReq({ url: "/floor", method: "GET" });

// {
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }
export const reqGetSearchResult = (params) =>
  mockReq({ url: "/list", method: "POST", data: params });

export const reqGoodsInfo = (skuid) => mockReq({ url: `/item`, method: "GET" });
// export const reqGoodsInfo = (skuid) =>
//   req({ url: `/item/${skuid}`, method: "GET" });

export const reqAddOrUpdateShoppingCart = (skuId, skuNum) =>
  req({ url: `cart/addToCart/${skuId}/${skuNum}`, method: "POST" });

export const reqCartList = () => req({ url: "/cart/cartList", method: "GET" });
