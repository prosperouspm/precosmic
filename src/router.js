import { createRouter, createWebHistory } from "vue-router";
import Precosmic from './components/Precosmic.vue'
import Kimono from "./components/Kimono.vue";


const About = { template: '<div>About</div>' }


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Precosmic },
    { path: "/kimono", component: Kimono },
    { path: '/about', component: About },
  ]
});