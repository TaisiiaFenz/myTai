import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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

  },
  mutations: {},
  actions: {},
  modules: {}
});
