<template>
  <div class="navigation">
    <Logo />
    <NavigationList />
    <AddNewFileButton />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import NavigationList from "./NavigationList";
import AddNewFileButton from "./AddNewFileButton";
export default {
  name: "MainNavigation",
  components: {
    AddNewFileButton,
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
