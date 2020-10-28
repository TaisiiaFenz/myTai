<template>
  <ul>
    <li><router-link to="/Home">Home</router-link></li>
    <li><router-link to="/Folders">Folders</router-link></li>
    <li><router-link to="/Photos">Photos</router-link></li>
    <li>Documents</li>
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
</style>
