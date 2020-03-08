import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "vue-star-rating";
import AOS from "aos";
import "aos/dist/aos.css";
import Snotify, { SnotifyPosition } from "vue-snotify";

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
};

Vue.component("star-rating", StarRating);
Vue.use(Snotify, options);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
