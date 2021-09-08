<template>
  <div class="history_left_container">
    <a href="/" class="history_left_image">
      <img
        src="../../../assets/img/smartpharm_logo.png"
        alt="Smartpharm logo"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "HistoryLeft",
};
</script>

<style scoped>
.history_left_container {
  width: 100%;
  max-width: 300px;
  height: 100%;
  min-height: 100vh;
  background-color: #4f1782;
  /* border: solid 1px red; */
}

.history_left_image {
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 20px;
}

@media only screen and (max-width: 1200px) {
  .history_left_container {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .history_left_image {
    margin-top: 0px;
  }
}
</style>
