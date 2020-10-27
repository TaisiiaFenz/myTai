<template>
  <div class="input">
    <input v-model="inputValue" placeholder="отредактируй меня" />
    <button>Search</button>
    <p>Введённое сообщение: {{ inputValue }}</p>
<!--    <p>Test {{getTodoById2('ipsum') }}</p>-->
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import store from 'vuex'

export default {
  name: "SearchInput",
  store,
  data: function() {
    return {
      inputValue: ""
    };
  },
  computed: mapState([
          'files'
  ]),
  methods: mapMutations([
    'getTodoById2'
  ]),
  watch: {
    inputValue: function() {
      console.log("Hello");
      console.log(store);
      this.store.commit('getTodoById2');
      //this.getTodoById2(this.inputValue);
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
