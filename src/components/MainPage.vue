<template>
  <div class="main">
    <MainContent />
    <MainNavigation />
  </div>
</template>

<script>
import MainNavigation from "./NavBar/MainNavigation.vue";
import MainContent from "./Content/MainContent";

export default {
  name: "MainPage",
  components: {
    MainContent,
    MainNavigation
  }
};
</script>

<style scoped>
.main {
  padding-top: 5px;
}
h3 {
  margin: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
