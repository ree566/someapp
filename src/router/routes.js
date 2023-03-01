const Home = () => import("@/pages/Home");
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
const MyOrder = () => import("@/pages/Center/MyOrder");
const GroupOrder = () => import("@/pages/Center/GroupOrder");

export default [
  {
    path: "/center",
    name: "center",
    component: Center,
    meta: {
      showFooter: true,
    },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    name: "paysuccess",
    component: PaySuccess,
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next(false);
      }
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
