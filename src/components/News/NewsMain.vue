<template>
  <div class="news_main_container">
    <FilterSide @filter="handleFilter" />
    <ContentSide :mainNews="mainNews" :news="news" />
  </div>
</template>

<script>
import FilterSide from "./FilterSide.vue";
import ContentSide from "./ContentSide.vue";

import data from "../../../data/newsData.json";
export default {
  name: "newsmain",
  components: { FilterSide, ContentSide },
  data() {
    return {
      mainNews: {},
      news: [],
    };
  },
  mounted() {
    this.news = data.news;
    let newsdata = data.news.filter((i) => i.newsIndex === 0);
    this.mainNews = newsdata[0];
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

<style>
.news_main_container {
  width: 100%;
  max-width: 1920px;
  /* border: solid 1px red; */
  margin: auto;
  display: flex;
  position: sticky;
  /* top: 250px; */
}

@media only screen and (max-width: 750px) {
  .news_main_container {
    display: block;
    /* padding: 30px; */
  }
}
</style>
