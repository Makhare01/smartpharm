<template>
  <div class="history_right_container">
    <h1 class="history_right_title">კომპანიის ისტორია</h1>

    <div class="history_second_div">
      <div class="history_right_subtitle_div">
        <p class="history_right_subtitle">
          კოდირებების კონვერტორი favicon.ico-ის გენერატორი მონაცემების
          გენერატორი ტექსტის გენერატორი სვეტების კალკულატორი ავტორიზაცია
        </p>
      </div>

      <div class="history_right_img_div">
        <div class="history_right_img_inside_div">
          <img
            class="history_right_img_border"
            src="../../../assets/img/image_border.svg"
            alt="Teammate image border"
          />

          <img
            class="history_right_img"
            src="../../../assets/img/team.png"
            alt="Teammate image"
          />
        </div>
      </div>
    </div>

    <p class="history_right_description">
      კოდირებების კონვერტორი favicon.ico-ის გენერატორი მონაცემების გენერატორი
      ტექსტის გენერატორი სვეტების კალკულატორი ავტორიზაცია შემთხვევითად
      გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის
      შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ
      შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას
      საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის
      მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება, რადგან უბრალოდ
      „ტექსტი ტექსტი ტექსტი“ ან სხვა გამეორებადი სიტყვების ჩაყრა, ხელოვნურ
      ვიზუალურ სიმეტრიას ქმნის და არაბუნებრივად გამოიყურება.
    </p>
  </div>
</template>

<script>
export default {
  name: "HistoryRight",
};
</script>

<style scoped>
.history_right_container {
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  background-color: #591a92;
  padding: 50px;
  position: relative;
}

.history_right_title {
  font-size: 36px;
  color: white;
  font-family: TBC Contractica CAPS Black;
}

.history_second_div {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 40px;
}

.history_right_subtitle_div {
  width: 100%;
  /* height: 100%; */
  /* border: solid 1px red; */
  display: flex;
  align-items: center;
}

.history_right_subtitle {
  font-size: 30px;
  color: white;
  font-family: TBC Contractica CAPS regular;
}

.history_right_img_div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

.history_right_img_inside_div {
  /* border: solid 1px red; */
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}

.history_right_img_border {
  width: 100%;
  max-width: 400px;
  transform: translateX(35%);
  margin: auto;
}

.history_right_img {
  width: 100%;
  max-width: 400px;
  clip-path: polygon(0 35%, 100% 0, 100% 65%, 0% 100%);
  border-radius: 20px;
  transform: translateX(-35%);
}

.history_right_description {
  font-size: 30px;
  color: white;
  font-family: TBC Contractica CAPS regular;
  margin-top: 50px;
}

@media only screen and (max-width: 1200px) {
  .history_right_container {
    padding: 0;
    padding-top: 10px;
  }
  .history_right_title {
    text-align: center;
  }
  .history_right_subtitle {
    text-align: center;
  }
  .history_second_div {
    width: 90%;
    margin: auto;
  }
  .history_right_title {
    text-align: center;
  }

  .history_right_description {
    text-align: center;
    margin: 0 20px;
    margin-top: 50px;
  }

  .history_second_div {
    grid-template-columns: repeat(1, 1fr);
  }

  .history_right_img {
    width: 80%;
    left: 50%;
    transform: translateX(-45%);
  }

  .history_right_img_border {
    width: 80%;
    left: 44%;
    transform: translateX(45%);
  }
}
</style>
