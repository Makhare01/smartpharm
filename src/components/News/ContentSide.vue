<template>
  <div class="contentside_div">
    <h1 class="news_header">სიახლეები</h1>
    <!-- title="სიახლეებიდან საწყისი ორი აბზაცი იქნება განთავსებული, ვისაუბრებთ ექიმების რჩევებზე, მითითებებზე, პრაქტიკაზე და მიღწევებზე"
      img="medicine.png" -->
    <MainNewsCard
      :id="mainNews.id"
      :title="mainNews.title"
      img="medicine.png"
    />

    <div class="news_div" v-if="news.length !== 0">
      <NewsCard
        v-for="value in news"
        :key="value.id"
        :id="value.id"
        :img="value.img"
        :header="value.title"
        :date="value.publishedAt"
      />
    </div>
    <div v-else class="news_div_error">
      <p class="news_div_error_title">სიახლეები არ მოიძებნა</p>
    </div>
  </div>
</template>

<script>
import MainNewsCard from "./MainNwesCard.vue";
import NewsCard from "./NewsCard.vue";

export default {
  name: "ContentSide",
  components: { MainNewsCard, NewsCard },
  props: ["mainNews", "news"],
};
</script>

<style scoped>
.contentside_div {
  width: 100%;
  /* max-width: 1520px; */
  padding: 30px;
  /* border: solid 1px red; */
}

.news_header {
  color: #591a92;
  font-size: 30px;
  text-align: left;
  font-family: TBC Contractica CAPS regular;
  font-weight: bold;
}

.news_div {
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 60px;
}

.news_div_error {
  width: 100%;
  margin-top: 50px;
}

.news_div_error_title {
  color: grey;
  font-size: 28px;
  font-family: TBC Contractica CAPS regular;
  /* text-align: left; */
}

@media only screen and (max-width: 750px) {
  .contentside_div {
    padding: 0;
  }

  .news_header {
    text-align: center;
  }

  .news_div {
    width: 90%;
    margin: auto;
    margin-top: 50px;
  }
}

@media only screen and (max-width: 1800px) {
  .news_div {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 1300px) {
  .news_div {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 1100px) {
  .news_div {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
