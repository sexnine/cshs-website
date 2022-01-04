import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BetterLayout from "../views/BetterLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/better",
    name: "better",
    component: BetterLayout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
