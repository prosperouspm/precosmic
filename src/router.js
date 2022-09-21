import { createRouter, createWebHistory } from "vue-router";
import Kimono from "./views/Kimomo.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/kimono", component: Kimono },
  ]
});