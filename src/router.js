import { createRouter, createWebHistory } from "vue-router";
import Precosmic from './components/Precosmic.vue'
import Kimono from "./views/Kimono.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Precosmic },
    { path: "/kimono", component: Kimono },
  ]
});