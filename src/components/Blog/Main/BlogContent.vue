<template>
  <div class="blog_content_container">
    <h1 class="blogs_header">ბლოგი</h1>

    <MainBlogsCard
      :id="mainBlogs.id"
      :title="mainBlogs.title"
      img="medicine.png"
    />

    <div class="blogs_div" v-if="blogs.length !== 0">
      <BlogsCard
        v-for="value in blogs"
        :key="value.id"
        :id="value.id"
        :img="value.img"
        :header="value.title"
        :date="value.publishedAt"
      />
    </div>
  </div>
</template>

<script>
import MainBlogsCard from "./MainBlogsCard.vue";
import BlogsCard from "./BlogsCard.vue";

export default {
  name: "BlogContent",
  components: { MainBlogsCard, BlogsCard },
  props: ["mainBlogs", "blogs"],
};
</script>

<style scoped>
.blog_content_container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-size: 36px;
  padding: 30px;
  /* background-color: tomato; */
}

.blogs_header {
  color: #591a92;
  font-size: 30px;
  text-align: left;
  font-family: TBC Contractica CAPS regular;
  font-weight: bold;
}

.blogs_div {
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 60px;
}
</style>
