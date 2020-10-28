import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/folders",
    name: "folders",
    component: () => import("../views/Folders")
  },
  {
    path: "/photos",
    name: "photos",
    component: () => import("../views/Photos")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
