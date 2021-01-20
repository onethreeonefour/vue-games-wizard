import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing";
import GameDetails from "../views/GameDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
  },
  {
    path: "/gamedetails/:id",
    name: "GameDetails",
    props: true,
    component: GameDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
