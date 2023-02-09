import Mock from "mockjs";
import category from "./category.json";
import banner from "./banner.json";
import floor from "./floor.json";
import searchResult from "./searchResult.json";

Mock.mock("/mock/product/getBaseCategoryList", {
  code: 200,
  data: category,
});
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
Mock.mock("/mock/list", { code: 200, data: searchResult });
