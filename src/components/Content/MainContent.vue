<template>
  <div class="main">
    <SearchInput />
    <router-view />
  </div>
</template>

<script>
import SearchInput from "./Search/SearchInput";
import { mapMutations } from "vuex";

export default {
  name: 'MainContent',
  components: {
    SearchInput
  },
  methods: mapMutations(['getFiles']),
  mounted: function() {
    this.['getFiles']();
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
