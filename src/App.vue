<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//import HelloWorld from './components/HelloWorld.vue'
import Precosmic from './components/Precosmic.vue'
</script>

<template>
  <!--<img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />-->
  <Precosmic />
</template>

<style>
body {
    background-color: aquamarine;
  background-image: 
    radial-gradient(closest-side, rgba(0, 255, 0, 1), rgba(0, 0, 255, 0)),
    radial-gradient(closest-side, rgba(0, 0, 255, 1), rgba(128, 0, 128, 0)),
    radial-gradient(closest-side, rgba(128, 0, 128, 1), rgba(0, 128, 0, 0)),
    radial-gradient(closest-side, rgba(0, 128, 0, 1), rgba(0, 0, 255, 0)),
    radial-gradient(closest-side, rgba(0, 0, 255, 1), rgba(128, 0, 128, 0));
  background-size: 
    130vmax 130vmax,
    80vmax 80vmax,
    90vmax 90vmax,
    110vmax 110vmax,
    90vmax 90vmax;
  background-position:
    -80vmax -80vmax,
    60vmax -30vmax,
    10vmax 10vmax,
    -30vmax -10vmax,
    50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 30s movement linear infinite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
