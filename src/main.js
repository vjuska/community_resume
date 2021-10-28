import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
