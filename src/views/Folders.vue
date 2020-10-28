<template>
  <div class="folders">
    <button v-for="folder in folders" :key="folder.id">
      {{ folder.name }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Folders",
  data: function() {
    return {};
  },
  computed: mapState(["folders"])
};
</script>

<style scoped>
.folders {
  display: flex;
  flex-wrap: wrap;
}
button {
  width: 150px;
  height: 50px;
  margin-right: 30px;
  border-radius: 3px;
  background-color: #006C8E;
  color: #E9F2F4;
  border: none;
 
  font-size: 16px;
}
  button:focus {
    outline: none;
  }
</style>
