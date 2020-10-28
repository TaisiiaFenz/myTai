<template>
  <div class="navigation">
    <Logo />
    <NavigationList />
    <UpLoadFile/>
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
  padding-left: 20px;
  width: 23%;
}
</style>
