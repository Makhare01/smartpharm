<template>
  <div class="blog_filter_container">
    <a href="/" class="blog_filter_logo"
      ><img src="../../../assets/img/smartpharm_logo.png" alt="Smartharm logo"
    /></a>

    <div class="last_added_div">
      <p class="last_added_title">ახალი დამატებული</p>

      <div v-for="item in last" :key="'last' + item.id" class="last_added_item">
        <router-link :to="{ name: 'NewsDetails', params: { id: item.id } }">
          <p class="last_added_item_title">{{ item.title }}</p>
          <div class="last_added_date">
            <i class="fas fa-calendar calendar_icon"></i>
            <p class="last_added_date_title">
              {{ item.publishedAt }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="filtering_div">
      <p class="fintering_title">ფილტრაცია</p>
      <label class="filtering_select_label">წელი</label>
      <select class="fintering_select" @change="handleYear($event)">
        <option value="all" selected>ყველა</option>
        <option v-for="year in years" :key="'year' + year" :value="year">
          {{ year }}
        </option>
      </select>

      <label class="filtering_select_label_category">კატეგორია</label>
      <select
        class="fintering_select_category"
        @change="handleCategory($event)"
      >
        <option value="all" selected>ყველა</option>
        <option
          v-for="category in categories"
          :key="'category' + category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import data from "../../../../data/newsData.json";

export default {
  name: "BlogFilter",
  data() {
    return {
      last: [],
      years: [],
      categories: [],
    };
  },
  mounted() {
    let last_added = data.blogs.filter(
      (i) => i.newsIndex === 0 || i.newsIndex === 1 || i.newsIndex === 2
    );
    last_added.reverse();
    this.last = last_added;

    // Years
    let time = new Date();
    let currentYear = time.getFullYear();
    let years = [];
    for (let i = 1972; i <= currentYear; i++) {
      years.push(i);
    }
    this.years = years.reverse();

    // Category
    this.categories = [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ];
  },
  methods: {
    handleYear(event) {
      // console.log(event.target.value);
      this.$emit("filter", event.target.value, 1);
    },
    handleCategory(event) {
      // console.log(event.target.value);
      this.$emit("filter", event.target.value, 2);
    },
  },
};
</script>

<style scoped>
.blog_filter_container {
  width: 100%;
  max-width: 250px;
  height: 100vh;
  position: sticky;
  top: 0px;
  left: 0px;
  padding: 0px 30px;
  /* border: solid 1px red; */
  background-color: #a3a3a3;
  /* float: left; */
  background-color: #aca5b2;
}

.blog_filter_logo {
  display: block;
  margin: auto;
  margin-top: 30px;
}

.last_added_div {
  width: 100%;
  /* border: solid 1px red; */
  margin-top: 50px;
}

.last_added_title {
  color: white;
  font-size: 20px;
  font-family: TBC Contractica CAPS regular;
  text-align: center;
}

.last_added_item {
  width: 90%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border-left: solid 4px #591a92;
  /* border: solid 1px green; */
  cursor: pointer;
  transition: 0.3s;
}

.last_added_item:hover {
  box-shadow: 5px 5px 20px grey;
}

.last_added_item_title {
  color: white;
  font-size: 18px;
  font-family: TBC Contractica CAPS regular;
  text-align: left;
}

.last_added_date {
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 5px;
}

.last_added_date_title {
  color: white;
  font-size: 14px;
  font-family: TBC Contractica CAPS regular;
  text-align: left;
  opacity: 0.7;
  display: flex;
  gap: 10px;
  /* border: solid 1px red; */
  padding-top: 3px;
}

.calendar_icon {
  font-size: 14px;
  color: white;
}

/* Filtering */

.filtering_div {
  width: 100%;
  height: 300px;
  /* border: solid 1px red; */
}

.fintering_title {
  font-size: 20px;
  color: white;
  font-family: TBC Contractica CAPS regular;
  text-align: center;
  padding: 20px 0px;
}

.fintering_select {
  width: 100%;
  height: 40px;
  background-color: white;
  border: white;
  box-shadow: 5px 5px 10px grey;
  margin-top: 5px;
  outline: none;
  border: solid 1px lightgray;
  font-family: TBC Contractica CAPS regular;
  padding-top: 7px;
  margin-bottom: 20px;
}

.filtering_select_label {
  color: white;
  text-align: left !important;
  font-size: 14px;
  font-family: TBC Contractica CAPS Book;
}

.fintering_select_category {
  width: 100%;
  height: 40px;
  background-color: white;
  border: white;
  box-shadow: 5px 5px 10px grey;
  margin-top: 5px;
  outline: none;
  border: solid 1px lightgray;
  font-family: TBC Contractica CAPS regular;
  padding-top: 7px;
  max-height: 300px;
}

.filtering_select_label_category {
  color: white;
  text-align: left !important;
  font-size: 14px;
  font-family: TBC Contractica CAPS Book;
}
</style>
