<template>
  <div class="navigation">
    <Logo />
    <NavigationList />
    <UpLoadFile />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import NavigationList from "./NavigationList";
import UpLoadFile from "./UpLoadFile";
export default {
  name: "MainNavigation",
  components: {
    UpLoadFile,
    NavigationList,
    Logo
  }
};
</script>

<style scoped>
.navigation {
  position: absolute;
  left: 0;
  width: 13%;
  height: 98vh;
  padding-left: 30px;
  background-color: #e9f2f4;
  border-radius: 3px;
}
</style>
