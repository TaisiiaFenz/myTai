<template>
  <ul>
    <li><router-link to="/" class="link">Home</router-link></li>
    <li><router-link to="/folders" class="link">Folders</router-link></li>
    <li><router-link to="/photos" class="link">Photos</router-link></li>
    <li class="link">Documents</li>
  </ul>
</template>

<script>
export default {
  name: "NavigationList"
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding-top: 20px;
}
.link {
  text-decoration: none;
  color: #006c8e;
  font-weight: bold;
  font-size: 18px;
}
</style>
