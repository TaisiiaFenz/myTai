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
        name: "dolar",
        id: 3
      }
    ]
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.files.filter(file => file.name === id);
    }
    // getTodoById: (state) => {
    //   return state.files.length;
    // }
  },
  mutations: {
    getTodoById2: (state) =>  {
      state.files.filter(file => file.name === 'ipsum');
    }
  },
  actions: {},
  modules: {}
});

export default store;