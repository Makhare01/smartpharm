<template>
  <div class="news_details_container">
    <FilterSide @filter="handleFilter" />
    <NewsDetail />
  </div>
</template>

<script>
import FilterSide from "../FilterSide.vue";
import NewsDetail from "./NewsDetail.vue";
import data from "../../../../data/newsData.json";

export default {
  name: "NewsDetails",
  components: { FilterSide, NewsDetail },
  data() {
    return {
      mainNews: {},
      news: [],
    };
  },
  methods: {
    handleFilter(event, index) {
      let filteredNews = [];
      if (index === 1) {
        filteredNews = data.news.filter(
          (i) => i.publishedAt.slice(0, 4) == event
        );
      } else {
        filteredNews = data.news.filter((i) => i.category == event);
      }

      this.news = filteredNews;
    },
  },
};
</script>

<style scoped>
.news_details_container {
  width: 100%;
  max-width: 1920px;
  /* border: solid 1px red; */
  margin: auto;
  display: flex;
  position: sticky;
  top: 250px;
}

@media only screen and (max-width: 750px) {
  .news_details_container {
    display: grid;
    grid-template-columns: auto;
    /* position: relative; */
    /* padding: 30px; */
  }
}
</style>
