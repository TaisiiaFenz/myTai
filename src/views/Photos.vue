<template>
  <div class="files">
    <FileCard
      v-for="file in filterPhotos"
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
  name: "Photos",
  computed: {
    ...mapState(["files"]),
    filterPhotos() {
      return this.files.filter(this.checkType);
    }
  },
  methods: {
    checkType(item) {
      const photosTypes = [".jpeg", ".gif", ".png", ".svg", ".jpg"];
      for (let type of photosTypes) {
        if (item.name.indexOf(type) === item.name.length - type.length)
          return true;
      }
      return false;
    }
  },
  components: {
    FileCard
  }
};
</script>

<style scoped>
.files {
  display: grid;
  padding-top: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5em;
}
</style>
