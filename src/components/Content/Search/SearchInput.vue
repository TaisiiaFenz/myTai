<template>
  <div class="input">
    <input v-model="inputValue" placeholder="Search" />
    <button v-on:click="unSearch2">X</button>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

export default {
  name: "SearchInput",
  data() {
    return {
      inputValue: ""
    };
  },
  computed: mapState([
          'files'
  ]),
  methods: {
    ...mapMutations({
    getTodoById2: 'getTodoById2',
    unSearch: 'unSearch'
  }),
    unSearch2() {
      console.log("gutten tag");
      this.inputValue = "";
      this.['unSearch']();
    }
  },
  watch: {
    inputValue() {
      console.log(this.$store);
      this.$store.commit('getTodoById2', this.inputValue);
      //this.['getTodoById2'](this.inputValue);
    }
  }
};
</script>

<style scoped>
.input {
  display: flex;
  height: 40px;
  padding-bottom: 50px;
}
input {
  flex-basis: 90%;
  display: block;
  height: inherit;
  background-color: #e9f2f4;
  border: none;
  border-radius: 3px;
  padding-left: 15px;
  font-size: 16px;
}
input:focus {
  outline: none;
}
button {
  flex: 1;
  height: 42px;
  background-color: #006c8e;
  color: #e9f2f4;
  border: none;
  border-radius: 3px;
  font-size: 20px;
}
button:focus {
  outline: none;
}
</style>
