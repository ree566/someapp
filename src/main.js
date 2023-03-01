import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import "swiper/css/swiper.css";

import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
import "@/plugins/Validate.js";
import "@/mock/mockServe";
import * as API from "@/api";

import { Button, MessageBox } from "element-ui";

import VueLazyload from "vue-lazyload";
import lazyImg from "@/assets/076_-loading_animated_dribbble_copy.gif";

Vue.use(VueLazyload, {
  loading: lazyImg,
});

import MyPlugins from "./plugins/MyPlugins";
Vue.use(MyPlugins, {
  name: "upper",
});

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  store,
}).$mount("#app");
