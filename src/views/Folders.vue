<template>
  <div class="folders">
    <button v-for="folder in folders" :key="folder.id">
      {{ folder.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Folders",
  data: function() {
    return {
      folders: [
        {
          iconSrc: "",
          name: "Lorem",
          id: 1
        },
        {
          iconSrc: "",
          name: "ipsum",
          id: 2
        },
        {
          iconSrc: "",
          name: "dolar",
          id: 3
        }
      ]
    };
  }
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
}
</style>
