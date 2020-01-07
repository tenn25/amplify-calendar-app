import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "bootstrap-vue";
import App from "./App.vue"; //シングルファイルコンポーネント
import router from "./router";
import store from "./store";

// Amplify読み込み
import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App) //ES6の記法 App.vueがコンポーネントのオブジェクトを返す
  /* ES5の記法だと以下
  render: function(h) {
    return h(App)
  }
  */
}).$mount("#app");
