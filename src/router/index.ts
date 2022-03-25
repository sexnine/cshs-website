import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/dash",
    name: "dashboard",
    component: () => import("../views/AccountDashboard.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
