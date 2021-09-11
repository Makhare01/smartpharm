<template>
  <div class="vacancy_detail_container">
    <h1 class="vacancy_detail_title">{{ vacancy.title }}</h1>
    <div class="vacancy_detail_div">
      <div class="vacancy_detail_header_div">
        <hi class="vacancy_detail_subtitle">{{ vacancy.subtitle }}</hi>
        <button class="vacancy_detail_button">
          <p>შეავსე ახლა</p>
        </button>
      </div>
      <div class="vacancy_detail_description_div">
        <p>{{ vacancy.description }}</p>
      </div>

      <button class="vacancy_detail_responsive_button">
        <p>შეავსე ახლა</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VacancyDetail",
  props: ["vacancy"],
};
</script>

<style scoped>
.vacancy_detail_container {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  /* border: solid 1px green; */
}

.vacancy_detail_title {
  font-size: 24px;
  width: 80%;
  margin: auto;
  color: #591a92;
  font-family: TBC Contractica CAPS Black;
}

.vacancy_detail_div {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
  border: solid 1px #591a92;
}

.vacancy_detail_header_div {
  width: 90%;
  height: 60px;
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid 1px red; */
}

.vacancy_detail_subtitle {
  font-size: 20px;
  color: #591a92;
  font-family: TBC Contractica CAPS book;
  font-weight: bold;
  padding-top: 6px;
}

.vacancy_detail_button {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #591a92;
  cursor: pointer;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.vacancy_detail_button:hover {
  background-color: rgb(69, 3, 126);
}

.vacancy_detail_button p {
  color: white;
  font-size: 14px;
  font-family: TBC Contractica CAPS book;
  font-weight: bold;
  padding-top: 6px;
  text-align: center;
}

/* Responsive button */

.vacancy_detail_responsive_button {
  width: 180px;
  height: 40px;
  border: none;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #591a92;
  cursor: pointer;
  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  display: none;
}

.vacancy_detail_responsive_button:hover {
  background-color: rgb(69, 3, 126);
}

.vacancy_detail_responsive_button p {
  color: white;
  font-size: 14px;
  font-family: TBC Contractica CAPS book;
  font-weight: bold;
  padding-top: 6px;
  text-align: center;
}

/* Responsive button */

.vacancy_detail_description_div {
  width: 90%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

.vacancy_detail_description_div p {
  font-size: 14px;
  color: #591a92;
  font-family: TBC Contractica CAPS book;
}

@media only screen and (max-width: 800px) {
  .vacancy_detail_div {
    width: 90%;
  }

  .vacancy_detail_title {
    text-align: center;
  }

  .vacancy_detail_header_div {
    display: block;
    margin-top: 10px;
  }

  .vacancy_detail_subtitle {
    text-align: center;
    /* border: solid 1px red; */
    display: block;
    margin: auto;
  }

  .vacancy_detail_button {
    display: none;
  }

  .vacancy_detail_description_div {
    margin-top: 10px;
  }

  .vacancy_detail_responsive_button {
    display: block;
  }
}
</style>
