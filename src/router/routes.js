import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";

export default [
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name: "search",
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      showFooter: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      showFooter: false,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      showFooter: true,
    },
  },
];
