<template>
  <div class="files">
    <FileCard
      v-for="file in files"
      :key="file.id"
      :name="file.name"
      :iconSrc="file.iconSrc"
      :imgSrc="file.imgSrc"
    >
    </FileCard>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FileCard from "./FileCard";
export default {
  name: "Files",
  data: function() {
    return {};
  },
  computed: mapState(["files"]),
  components: {
    FileCard
  }
};
</script>

<style scoped>
.files {
  display: grid;
  padding-top: 50px;
  /*grid-template-columns: 260px 260px 260px;*/
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5em;
}
</style>
