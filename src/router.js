import { createRouter, createWebHistory } from "vue-router";
import Precosmic from './components/Precosmic.vue'
import Kimono from './components/Kimono.vue';
import Kimono2 from './pages/Kimono.vue';


const About = { template: '<div>About</div>' }


export const router = createRouter({
    history: createWebHistory(),
  routes: [
    { path: '/', component: Precosmic },
    { path: '/kimono', component: Kimono },
    { path: '/kimono2', component: Kimono2 },
    { path: '/about', component: About },
  ]
});
