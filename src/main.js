import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueLocalStorage from "vue-localstorage";
import Vue2Storage from "vue2-storage";

import "./assets/styles/fonts.css";
import "./assets/scripts/common.js";

Vue.config.productionTip = false;
Vue.use(VueLocalStorage, {
  name: "ls",
  bind: true //created computed members from your variable declarations
});
Vue.use(Vue2Storage, {
  prefix: "app_",
  driver: "local",
  ttl: 60 * 60 * 24 * 1000 // 24 часа
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
