<template>
  <div>
    <NavBar />
    <Landing />
  </div>
</template>

<script>
import NavBar from "./components/Navigation/NavBar.vue";
import Landing from "./components/Landing/Landing.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Landing,
  },
};
</script>

<style lang="scss">
@import "./Style.scss";
</style>
