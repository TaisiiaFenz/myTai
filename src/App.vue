<template>
  <div id="app">
    <!--        <div id="nav">-->
    <!--          <router-link to="/">Home</router-link> |-->
    <!--          <router-link to="/about">About</router-link>-->
    <!--        </div>-->
    <!--        <router-view />-->
    <!--        <img alt="Vue logo" src="./assets/logo.png">-->
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
