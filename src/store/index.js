import Vue from "vue";
import Vuex from "vuex";
import {Dropbox} from "dropbox";
import Logo from "@/assets/folder.jpg";
import Img from "@/assets/img.png"

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
    files: [],
    reservedFiles: []
  },
  mutations: {
    searchByInput(state, str) {
      const result = state.files.filter(
        file => file.name.toLowerCase().indexOf(str) === 0
      );
      state.files = result;
    },

    unSearch(state) {
      state.files = state.reservedFiles;
    },

    getFiles(state) {
      const dbx = new Dropbox({
        accessToken: 'O35z1UbDU-8AAAAAAAAAAQ7uuMn8mqUz1i9zJf2wbuBP_bC2c-RH1Tnkfqhj7U12',
        fetch: window.fetch.bind(window)
      });

      const getState = {
        files: []
      };
      const init = () => {
        dbx.filesListFolder({
          path: ''
        }).then(res => {
          updateFiles(res.result.entries)
        })
      };
      const updateFiles = files => {
        getState.files = [...getState.files, ...files];
        renderFiles();
      }

      const renderFiles = () => {
        getState.files.forEach((file) => {
          const type = file['.tag'];
          let thumbnail = '';
          if (type == 'file') {
            if (file.thumbnail) {
              thumbnail = `data:image/jpeg;base64, ${file.thumbnail}`
            }
            else {
              thumbnail = Logo;
            }
            const objectFile = {
              iconSrc:`${thumbnail}`,
              imgSrc: `${Img}`,
              name: file.name,
              id: state.files.length + 1
            };
            state.files.push(objectFile);
            state.reservedFiles.push(objectFile);
          }
        });
      };
      init();
    }
  },
  actions: {},
  modules: {}
});

export default store;
