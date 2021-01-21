<template>
	<div>
		<NavBar />
	</div>
	<router-view />
</template>

<script>
import NavBar from "./components/Navigation/NavBar.vue";

export default {
	name: "App",
	components: {
		NavBar,
	},
};
</script>

<style lang="scss">
@import "./Style.scss";
</style>
