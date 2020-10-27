import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Folders from "../views/Folders.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Folders",
    component: Folders
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
