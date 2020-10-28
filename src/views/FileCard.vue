<template>
  <div class="card">
    <img :src="imgSrc" alt="Image" class="card_img" />
    <div class="title">
      <img :src="iconSrc" alt="Icon" />
      <!--            нужно ли здесь привязывать изображение-->
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileCard",
  props: ["name", "iconSrc", "imgSrc"],
  data: function() {
    return {
      attribute: "src"
    };
  }
};
</script>

<style scoped>
.card {
  position: relative;
  height: 250px;
  padding: 10px 10px 20px;
  box-shadow: 0 0 30px rgba(0,0,0,0.08);
}
.card_img {
  height: 200px;
}
.title {
  position: absolute;
  bottom: 0;
}
.title img {
  display: inline-block;
  padding-right: 20px;
}
.title p {
  display: inline-block;
}
</style>
