<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <!-- <Precosmic /> -->

  <router-view></router-view>
</template>

<script>
  import { useRouter, useRoute } from "vue-router";
  // import { supabase } from "./supabase";
  
  export default {
    name: "App",
  
    setup() {
      const router = useRouter();
      const route = useRoute();
  
      // router.beforeEach(async (to, from) => {
      //   // to.path must be checked to prevent infinite redirection
      //   if (!supabase.auth.user() && to.path.includes("/viewChangeRequest")) {
      //     // email link clicked
      //     return { path: "/auth", query: { redirect: to.path } };
      //   } else if (
      //     !supabase.auth.user() &&
      //     to.path !== "/auth" &&
      //     to.path !== "/register"
      //   ) {
      //     return { path: "/auth" };
      //   } else if (
      //     supabase.auth.user() &&
      //     (to.path === "/auth" || to.path === "/register")
      //   ) {
      //     return { path: "/" };
      //   }
      // });
    },
  };
  </script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
