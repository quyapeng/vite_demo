import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import request from '@/common/request';
import "./index.css";

createApp(App).use(router).use(request).mount("#app");
// console.log(createApp);
