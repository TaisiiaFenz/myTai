<template>
  <div class="main">
    <SearchInput />
    <router-view />
  </div>
</template>

<script>
import SearchInput from "./Search/SearchInput";
export default {
  name: "MainContent",
  components: {
    SearchInput
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  right: 5%;
  width: 77%;
}
</style>
