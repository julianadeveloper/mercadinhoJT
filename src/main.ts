import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/globalStyle.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCartShopping, fas, faShop, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


library.add(fas,faShop, faCartShopping, faMagnifyingGlass)
createApp(App).component('fa',FontAwesomeIcon ).use(store).use(router).mount("#app");


