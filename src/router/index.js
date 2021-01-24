import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing";
import GameDetails from "../views/GameDetails";
import Search from "../views/Search";

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
	{
		path: "/search/:query",
		name: "Search",
		props: true,
		component: Search,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
