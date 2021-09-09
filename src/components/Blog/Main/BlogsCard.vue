<template>
  <div class="blogs_card_main_div">
    <router-link :to="{ name: 'NewsDetails', params: { id: `${id}` } }">
      <img
        :src="require(`../../../assets/img/${img}`)"
        alt="card image"
        class="blogs_card_image"
      />
    </router-link>
    <div class="blogs_card_title">
      <router-link :to="{ name: 'NewsDetails', params: { id: `${id}` } }">
        <p class="blogs_card_title_header">{{ header }}</p>
      </router-link>
    </div>
    <div class="blogs_card_date">
      <i class="fas fa-calendar calendar_icon"></i>
      <p class="blogs_card_date_title">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogsCard",
  props: ["id", "img", "header", "date"],
};
</script>

<style scoped>
.blogs_card_main_div {
  width: 100%;
  margin-bottom: 40px;
}

.blogs_card_image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
}

.blogs_card_title {
  width: 100%;
}

.blogs_card_title_header {
  font-size: 24px;
  color: #591a92;
  font-family: TBC Contractica CAPS regular;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
}

.blogs_card_title_header:hover {
  color: #4114aa;
}

.blogs_card_date {
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 5px;
}

.blogs_card_date_title {
  color: grey;
  font-size: 14px;
  font-family: TBC Contractica CAPS regular;
  text-align: left;
  opacity: 0.7;
  display: flex;
  gap: 5px;
  /* border: solid 1px red; */
  padding-top: 6px;
}

.calendar_icon {
  font-size: 16px;
  color: grey;
}
</style>
