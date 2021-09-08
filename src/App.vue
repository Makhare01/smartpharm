<template>
  <!-- <div
    style="width: 100%; height: 90px; background-color: #591A92; top: 0; z-index: 2"
  ></div> -->
  <!-- <NewsMain /> -->
  <router-view />
</template>

<script>
// import NewsMain from "./components/News/NewsMain.vue";

export default {
  name: "App",
  components: {
    // NewsMain,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: TBC Contractica CAPS Black;
  src: url("./assets/fonts/TBCContracticaCAPS-Black.ttf");
}

@font-face {
  font-family: TBC Contractica CAPS Bold;
  src: url("./assets/fonts/TBCContracticaCAPS-Bold.ttf");
}

@font-face {
  font-family: TBC Contractica CAPS Book;
  src: url("./assets/fonts/TBCContracticaCAPS-Book.ttf");
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
a {
  text-decoration: none;
}
</style>
