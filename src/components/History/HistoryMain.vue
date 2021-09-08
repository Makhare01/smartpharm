<template>
  <div class="history_main_container">
    <HistoryLeft />
    <HistoryRight />
  </div>
</template>

<script>
import HistoryLeft from "./Left/HistoryLeft.vue";
import HistoryRight from "./Right/HistoryRight.vue";
export default {
  name: "HistoryMain",
  components: { HistoryLeft, HistoryRight },
};
</script>

<style scoped>
.history_main_container {
  width: 100%;
  max-width: 1920px;
  display: flex;
  margin: auto;
  /* border: solid 1px red; */
  background-color: #4f1782;
}

@media only screen and (max-width: 1200px) {
  .history_main_container {
    display: block;
    /* padding: 30px; */
  }
}
</style>
