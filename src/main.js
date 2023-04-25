import Vue from "vue";
import App from "./App.vue";

import TypeNav from "@/components/TypeNav";

Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;
// 引入路由
import router from "@/router";

import { reqCategoryList } from "@/api";

// 引入倉庫
import store from "./store";

import "@/mock/mockServe";

import "swiper/css/swiper.css";

reqCategoryList();

new Vue({
  render: (h) => h(App),
  // 注册路由
  router,
  store,
}).$mount("#app");
