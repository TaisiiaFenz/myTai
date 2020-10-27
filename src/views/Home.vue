<template>
  <div class="home">
    <Folders />
    <Files />
  </div>
</template>

<script>
import Files from "./Files";
import Folders from "./Folders";

export default {
  name: "Home",
  components: {
    Folders,
    Files
  }
};
</script>
