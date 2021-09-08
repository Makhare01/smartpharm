<template>
  <div class="main_news_div" :style="inlineStyle">
    <p class="main_news_title">{{ title }}</p>

    <button type="button" class="main_news_button">
      <router-link :to="{ name: 'NewsDetails', params: { id: `${id}` } }">
        <p class="main_news_button_label">მეტის ნახვა</p>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "MainNewsCard",
  props: ["id", "title", "img"],
  data() {
    return {
      ID: 5,
    };
  },
  computed: {
    bgImage() {
      return require(`../../assets/img/${this.img}`);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style scoped>
.main_news_div {
  width: 100%;
  height: 450px;
  /* border: solid 1px blue; */
  border-radius: 10px;
  margin-top: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  position: relative;
}

.main_news_title {
  font-size: 28px;
  color: white;
  font-family: TBC Contractica CAPS regular;
  /* border: solid 1px red; */
  max-width: 700px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 70px;
  text-align: center;
}

.main_news_button {
  border: solid 2px white;
  border-radius: 10px;
  background-color: transparent;
  text-align: center;
  width: 150px;
  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 50px;
  cursor: pointer;
  transition: 0.3s;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(53, 53, 53, 0)),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.main_news_button:hover {
  background: #cbd5e0;
  border: solid 2px #cbd5e0;
}

.main_news_button_label {
  font-size: 18px;
  color: white;
  font-family: TBC Contractica CAPS regular;
  padding-top: 8px;
  transition: 0.3s;
}

.main_news_button:hover .main_news_button_label {
  color: #591a92;
}

@media only screen and (max-width: 750px) {
  .main_news_div {
    width: 90%;
    margin: auto;
    margin-top: 30px;
  }
}
</style>
