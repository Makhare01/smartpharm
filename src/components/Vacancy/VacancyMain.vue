<template>
  <div style="width: 100%; height: 100px; background-color: #591a92;"></div>
  <div class="vacancy_main_div_container">
    <div class="vacancy_main_div">
      <img
        class="vacancy_main_svg"
        src="../../assets/img/vacancy-img.svg"
        alt="Vacancy illustration"
      />
    </div>
  </div>

  <div class="vacancy_main_container">
    <div class="vacancy_content_div">
      <Vacancies :vacancies="vacancies" @change="handleActive" />
      <VacancyDetail :vacancy="vacancy" />
    </div>
  </div>
  <div style="width: 100%; height: 300px; background-color: #591a92;"></div>
</template>

<script>
import Vacancies from "./Vacancies.vue";
import VacancyDetail from "./VacancyDetail.vue";

import data from "../../../data/newsData.json";

export default {
  name: "VacancyMain",
  components: { Vacancies, VacancyDetail },
  data() {
    return {
      vacancies: [],
      vacancy: {},
    };
  },
  mounted() {
    let vacancies = data.vacancies;
    this.vacancies = vacancies;

    let vacancy = data.vacancies.filter((i) => i.isActive === true);
    this.vacancy = vacancy[0];
  },
  methods: {
    handleActive(id) {
      console.log(id);
      this.vacancies.map((i) => (i.isActive = false));
      this.vacancies.map((i) => {
        if (i.id === id) i.isActive = true;
      });

      let activeVacancy = this.vacancies.filter((i) => i.isActive === true);
      this.vacancy = activeVacancy[0];
    },
  },
};
</script>

<style scoped>
.vacancy_main_div_container {
  width: 100%;
  height: 400px;
  background: linear-gradient(
    0deg,
    rgba(89, 26, 146, 1) 69%,
    rgba(130, 88, 168, 1) 69%,
    rgba(130, 88, 168, 1) 80%,
    rgba(125, 150, 240, 1) 80%,
    rgba(125, 150, 240, 1) 90%,
    rgba(125, 150, 240, 1) 90%,
    rgba(155, 240, 240, 1) 90%,
    rgba(155, 240, 240, 1) 97%,
    rgba(155, 240, 240, 1) 97%
  );
  margin-top: 50px;
}

.vacancy_main_div {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vacancy_main_container {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  /* padding-top: 50px; */
  /* border: solid 1px red; */
}

.vacancy_main_svg {
  width: 100%;
  max-width: 300px;
  align-self: flex-end;
}

.vacancy_content_div {
  width: 100%;
  display: flex;
}

@media only screen and (max-width: 800px) {
  .vacancy_main_div {
    justify-content: space-around;
  }

  .vacancy_content_div {
    display: block;
  }
}
</style>
