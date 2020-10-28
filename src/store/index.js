import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
    ],
    files: [
      {
        iconSrc: "",
        imgSrc: "",
        name: "Lorem",
        id: 1
      },
      {
        iconSrc: "",
        imgSrc: "",
        name: "ipsum",
        id: 2
      },
      {
        iconSrc: "",
        imgSrc: "",
        name: "dolar.png",
        id: 3
      }
    ],
    reservedFiles: [
      {
        iconSrc: "",
        imgSrc: "",
        name: "Lorem",
        id: 1
      },
      {
        iconSrc: "",
        imgSrc: "",
        name: "ipsum",
        id: 2
      },
      {
        iconSrc: "",
        imgSrc: "",
        name: "dolar",
        id: 3
      }
    ]
  },
  getters: {
    getTodoById: state => id => {
      return state.files.filter(file => file.name === id);
    }
  },
  mutations: {
    getTodoById2(state, str) {
      const result = state.files.filter(file => file.name.toLowerCase().indexOf(str) === 0);
      state.files = result;
    }
  },
  actions: {},
  modules: {}
});

export default store;
