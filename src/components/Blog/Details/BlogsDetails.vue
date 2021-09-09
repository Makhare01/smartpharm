<template>
  <div class="blogs_details_container">
    <BlogFilter @filter="handleFilter" />
    <BlogsDetail />
  </div>
</template>

<script>
import BlogFilter from "../Main/BlogFilter.vue";
import BlogsDetail from "./BlogsDetail.vue";

import data from "../../../../data/newsData.json";
export default {
  name: "BlogsDetails",
  components: { BlogFilter, BlogsDetail },
  data() {
    return {
      mainBlogs: {},
      blogs: [],
    };
  },
  methods: {
    handleFilter(event, index) {
      let filteredNews = [];
      if (index === 1) {
        filteredNews = data.blogs.filter(
          (i) => i.publishedAt.slice(0, 4) == event
        );
      } else {
        filteredNews = data.blogs.filter((i) => i.category == event);
      }

      this.blogs = filteredNews;
    },
  },
};
</script>

<style scoped>
.blogs_details_container {
  width: 100%;
  max-width: 1920px;
  /* border: solid 1px red; */
  margin: auto;
  display: flex;
  position: sticky;
  top: 250px;
}

@media only screen and (max-width: 750px) {
  .blogs_details_container {
    display: grid;
    grid-template-columns: auto;
    /* position: relative; */
    /* padding: 30px; */
  }
}
</style>
