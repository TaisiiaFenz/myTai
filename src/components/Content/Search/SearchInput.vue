<template>
  <div class="input">
    <input v-model="inputValue" placeholder="Search" />
    <button v-on:click="unSearchButton">X</button>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'SearchInput',
    data() {
      return {
        inputValue: ''
      };
    },
    computed: mapState([
            'files'
    ]),
    methods: {
      ...mapMutations({
        searchByInput: 'searchByInput',
        unSearch: 'unSearch'
    }),
      unSearchButton() {
        this.inputValue = '';
        this.['unSearch']();
      }
    },
    watch: {
      inputValue() {
        this.$store.commit('searchByInput', this.inputValue);
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
