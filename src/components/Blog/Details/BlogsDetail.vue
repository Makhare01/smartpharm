<template>
  <div class="details_contentside_div">
    <div class="details_back_div" @click="$router.go(-1)">
      <i class="fas fa-chevron-left"></i>
      <p>უკან</p>
    </div>
    <h1 class="details_header">{{ data.title }}</h1>
    <div class="details_image_div" :style="inlineStyle" />
    <p class="details_description">{{ data.content }}</p>
  </div>
</template>

<script>
import allData from "../../../../data/newsData.json";

export default {
  name: "BlogsDetail",
  data() {
    return {
      id: this.$route.params.id,
      data: [],
    };
  },
  watch: {
    "$route.params.id": function() {
      let blogs = allData.blogs.filter((i) => i.id == this.$route.params.id);
      this.data = blogs[0];
    },
  },
  mounted() {
    let blogs = allData.blogs.filter((i) => i.id == this.$route.params.id);
    this.data = blogs[0];
  },
  computed: {
    bgImage() {
      // console.log(this.data.img);
      return require(`../../../assets/img/medicine.png`);
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
.details_contentside_div {
  width: 100%;
  /* height: 100vh; */
  /* border: solid 5px green; */
  /* max-width: 1520px; */
  padding: 50px;
  position: relative;
}

.details_back_div {
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.details_back_div:hover i {
  color: #591a92;
}

.details_back_div:hover p {
  color: #591a92;
}

.details_back_div i {
  font-size: 24px;
  color: grey;
}

.details_back_div p {
  font-size: 18px;
  color: grey;
  font-family: TBC Contractica CAPS regular;
  padding-top: 8px;
}

.details_header {
  font-size: 36px;
  color: #591a92;
  font-family: TBC Contractica CAPS Black;
  text-align: center;
}

.details_image_div {
  width: 100%;
  height: 450px;
  border-radius: 10px;
  margin-top: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  position: relative;
}

.details_description {
  font-size: 24px;
  color: #591a92;
  font-family: TBC Contractica CAPS;
  margin-top: 40px;
}

@media only screen and (max-width: 750px) {
  .details_contentside_div {
    /* display: block; */
    padding: 0;
    margin-top: 20px;
    /* border: solid 1px red; */
    padding-top: 50px;
    height: 100%;
  }

  .details_back_div {
    top: 5px;
    left: 3px;
  }

  .details_image_div {
    width: 90%;
    margin: auto;
    margin-top: 30px;
  }

  .details_description {
    width: 90%;
    margin: auto;
    margin-top: 30px;
    font-size: 18px;
    /* text-align: justify; */
  }
}
</style>
