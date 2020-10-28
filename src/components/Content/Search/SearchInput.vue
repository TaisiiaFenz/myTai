<template>
  <div class="input">
    <input v-model="inputValue" placeholder="отредактируй меня" />
    <button v-on:click="unSearch2">X</button>
    <p>Введённое сообщение: {{ inputValue }}</p>
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
  height: 30px;
  padding-bottom: 50px;
}
input {
  flex-basis: 80%;
  display: block;
  height: inherit;
}
button {
  flex: 1;
  height: 36px;
}
</style>
