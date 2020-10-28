import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Folders from "../views/Folders.vue";
import Photos from "../views/Photos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/folders",
    name: "Folders",
    component: Folders
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
