<template>
  <div class="works">
    <section class="hero-section">
      <div class="hero__social">
        <SocialLinks/>
      </div>
      <MenuHeader/>
      <HeroBlock/>
      <button class="hero__arrow-down" aria-label="scroll down"></button>
    </section>
    <section class="works-section">
      <svg class="works-section__triangles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 85" preserveAspectRatio="none" width="1800" height="150">
        <polygon class="left" points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
        <polygon class="right" points="1000,0   1000,86   500,86   500,75.5"></polygon>
      </svg>
      <div class="works__title-wrap">
        <h1 class="works__title">Мои работы</h1>
      </div>
      <div class="works__container">
        <div class="work">
          <div class="work__block">
            <h3 class="work__title">{{works[0].title}}</h3>
            <p class="work__skills">
              {{works[0].skills}}
            </p>
            <button class="work__button">Посмотреть сайт</button>
          </div>
        </div>
        <div class="work__preview">
          <img src="../assets/images/works_img/work_preview.png" alt="work preview" class="work__img">
        </div>
        <div class="work__thumb work__thumb--first">
          <img src="../assets/images/works_img/work_thumb1.jpg" alt="work thumb" class="work__thumb-img">
          <button class="work__thumb-btn" aria-label="slide works" v-on:click="slideDown"></button>
        </div>
        <div class="work__thumb work__thumb--second">
          <img src="../assets/images/works_img/work_thumb2.jpg" alt="work thumb" class="work__thumb-img">
          <button class="work__thumb-btn" aria-label="slide works" v-on:click="slideUp"></button>
        </div>
      </div>
    </section>
    <section class="about-section">
      <div class="about__title-wrap">
        <h2 class="about__title">Что обо мне говорят</h2>
      </div>
      <div class="testimonials__container">
        <div class="testimonials__block">
          <div class="testimonials__icon"></div>
          <div class="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor est exercitationem inventore minima mollitia nemo officiis quaerat quia tenetur.</div>
          <div class="testimonials__author"></div>
          <div class="testimonials__name">First and Last name, position*</div>
        </div>
        <div class="testimonials__block">
          <div class="testimonials__icon"></div>
          <div class="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor est exercitationem inventore minima mollitia nemo officiis quaerat quia tenetur.</div>
          <div class="testimonials__author"></div>
          <div class="testimonials__name">First and Last name, position*</div>
        </div>
      </div>
      <div class="about__contact">
        <form action="https://formspree.io/klymenko.sasha21@gmail.com" method="post" class="form-contact" id="formContact">
          <h3 class="form-contact__title">Связаться со мной</h3>
          <input type="text" name="Name" placeholder="Имя" class="form-contact__input" id="formContactName">
          <input type="text" name="Email" placeholder="Email" class="form-contact__input" id="formContactEmail">
          <textarea name="Message" id="formContactMsg" placeholder="Ваше сообщение" class="form-contact__msg"></textarea>
          <div class="form-contact__button-wrap">
            <button class="form-contact__button" type="submit" @click="clearFormFields">Отправить</button>
            <button class="form-contact__button form-contact__button--dark" id="js-formContactClean" v-on:click.prevent="clearFormFields">Очистить</button>
          </div>
        </form>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable no-console */
import SocialLinks from "@/components/SocialLinks.vue";
import Footer from "@/components/Footer.vue";
import HeroBlock from "@/components/HeroBlock.vue";
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  name: "Works",
  data: function() {
    return {
      works: [
        {
          title: "First work",
          skills: "html, css, javascript",
          link: "/welcome"
        },
        {
          title: "Second work",
          skills: "VueJS, Scss",
          link: "/welcome"
        },
        {
          title: "Third work",
          skills: "Ruby&Rails, Scss",
          link: "/welcome"
        }
      ]
    };
  },
  components: {
    SocialLinks,
    Footer,
    HeroBlock,
    MenuHeader
  },
  methods: {
    slideUp: function() {
      let previewImg = document.body.querySelector('.work__img'),
        thumbPrev = document.body.querySelector('.work__thumb--first .work__thumb-img'),
        thumbNext = document.body.querySelector('.work__thumb--second .work__thumb-img');

      let newPreviewImg = thumbNext.src,
        newThumbPrev = previewImg.src,
        newThumbNext = thumbPrev.src;

      previewImg.src = newPreviewImg;
      thumbPrev.src = newThumbPrev;
      thumbNext.src = newThumbNext;
    },
    slideDown: function() {
      let previewImg = document.body.querySelector('.work__img'),
        thumbPrev = document.body.querySelector('.work__thumb--first .work__thumb-img'),
        thumbNext = document.body.querySelector('.work__thumb--second .work__thumb-img');

      let newPreviewImg = thumbPrev.src,
        newThumbPrev = thumbNext.src,
        newThumbNext = previewImg.src;

      previewImg.src = newPreviewImg;
      thumbPrev.src = newThumbPrev;
      thumbNext.src = newThumbNext;
    },
    clearFormFields: function() {
      let formNameField = document.getElementById('formContactName');
      let formEmailField = document.getElementById('formContactEmail');
      let formMsgField = document.getElementById('formContactMsg');

      formNameField.value = '';
      formEmailField.value = '';
      formMsgField.value = '';
    }
  }
};
</script>

<style scoped lang="scss">
.hero-section {
  position: relative;
  padding-top: 150px;
  height: 790px;

  background: url("../assets/images/background_images/about_bg.jpg") no-repeat
    center / cover;
}
.hero {
  &__social {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  &__menu {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  &__arrow-down {
    margin-top: 130px;
    width: 26px;
    height: 16px;
    background: url("../assets/images/icons/arrow_down.svg") no-repeat center /
      contain;
  }
}

.works-section {
  position: relative;
  margin-top: -100px;
  &__triangles {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-99%);
    fill: #fff;
    width: 100%;
    .left {
      fill: #faf8f0;
    }
    .right {
      fill: #faf8f0;
    }
  }
}
.works {
  position: relative;
  &__title {
    &-wrap {
      text-align: center;
      background-color: #faf8f0;
    }

    position: relative;
    display: inline-block;
    padding: 70px;

    font-family: BERNIERRegular;
    color: #373e42;
    font-size: 63px;
    line-height: 1;

    background: url("../assets/images/background_titles/works_header.svg")
      no-repeat center / contain;
    &:before {
      content: "";
      position: absolute;
      left: 30px;
      top: 100px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 30px;
      top: 100px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__container {
    display: grid;
    grid-auto-columns: 2fr 1fr 1fr;
    grid-auto-rows: 525px 225px;
    grid-column-gap: 2px;
    grid-template-areas:
      "work preview preview"
      "work thumb1 thumb2";

    background: #efebe0;
  }
}
.work {
  grid-area: work;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f0efe9;
  &__title {
    position: relative;
    display: inline-block;
    padding: 40px 0;
    text-align: center;

    font-family: BERNIERRegular;
    color: #455a64;
    font-size: 35px;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      left: -55px;
      top: 57px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: -55px;
      top: 57px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__skills {
    padding: 15px 0;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #20b5a1;

    border-top: 2px solid rgba(0, 150, 136, 0.3);
    border-bottom: 2px solid rgba(0, 150, 136, 0.3);
  }
  &__button {
    margin-top: 40px;
    padding: 16px 35px 13px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #fff;

    border-radius: 5px;
    background-color: #00bfa5;
  }

  &__preview {
    grid-area: preview;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
  }
  &__img {
    width: 620px;
    height: 400px;
  }
  &__thumb {
    position: relative;
    padding: 20px;
    &--first {
      grid-area: thumb1;
      .work__thumb-btn {
        background-image: url("../assets/images/icons/portf_arrow_down.svg");
      }
    }
    &--second {
      grid-area: thumb2;
      .work__thumb-btn {
        background-image: url("../assets/images/icons/portf_arrow_up.svg");
      }
    }
    &-img {
      width: 280px;
      height: 180px;
    }
    &-btn {
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%);
      width: 43px;
      height: 27px;

      background: no-repeat center / contain;
    }
    &:after {
      content: "";
      position: absolute;
      z-index: 5;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
}

.about-section {
  position: relative;
  padding-bottom: 250px;
  min-height: 650px;

  background: url("../assets/images/background_images/works_bg_bottom.png")
    no-repeat center / cover;
}
.about {
  &__title {
    &-wrap {
      text-align: center;
      /*background-color: #fefefe;*/
    }

    position: relative;
    display: inline-block;
    padding: 70px;

    font-family: BERNIERRegular;
    color: #373e42;
    font-size: 63px;
    line-height: 1;

    background: url("../assets/images/background_titles/about_header.svg")
      no-repeat center / contain;
    &:before {
      content: "";
      position: absolute;
      left: 30px;
      top: 100px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 30px;
      top: 100px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__contact {
    margin-top: 70px;
  }
}

.form-contact {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px 50px;
  width: 380px;
  overflow: hidden;
  border-radius: 5px;
  &__title {
    position: relative;
    z-index: 5;
    display: inline-block;
    padding: 40px 0;
    text-align: center;

    font-family: BERNIERRegular;
    color: #455a64;
    font-size: 35px;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      left: 5px;
      top: 57px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 5px;
      top: 57px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__input,
  &__msg {
    z-index: 5;
    margin-bottom: 20px;
    padding: 16px 20px 17px;
    width: 100%;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgb(55, 62, 66);

    border-radius: 5px;
    background: #fff;
  }
  &__msg {
    height: 140px;
    resize: none;
  }
  &__button {
    &-wrap {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      z-index: 5;
      width: 100%;
      background: #fff;
    }

    width: 100%;
    margin-right: 1px;
    padding: 14px 20px;
    text-align: center;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background: rgba(0, 191, 165, 0.85);
    &--dark {
      background: rgba(0, 150, 136, 0.85);
    }

    &:last-child {
      margin-right: 0;
    }
  }
  &:before {
    content: "";
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/background_images/water_blur.png")
      no-repeat center / cover;
    filter: blur(20px);
  }
}
.testimonials {
  &__container {
    display: flex;
    justify-content: center;
    padding-top: 40px;
  }
  &__block {
    margin-right: 40px;
    max-width: 355px;
    text-align: left;
    &:last-child {
      margin-right: 0;
    }
  }
  &__icon {
    margin-bottom: 30px;
    width: 30px;
    height: 30px;
    background: url("../assets/images/icons/quote.svg") no-repeat center /
      contain;
  }
  &__text {
    margin-bottom: 30px;
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    color: #455a64;
  }
  &__author {
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #ccc;
  }
  &__name {
    display: inline-block;
    vertical-align: middle;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    color: #20b5a1;
  }
}

.menu-button {
  width: 40px;
  height: 35px;
  background: url("../assets/images/icons/hamburger.svg") no-repeat center /
    contain;
}

@media all and (max-width: 767px) {
  .hero-section {
    padding-top: 100px;
    height: 90vh;
  }
  .works__title {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 36px;
    &:before,
    &:after {
      top: 50px;
    }
  }
  .works-section__triangles {
    height: 30px;
  }
  .works__container {
    grid-auto-columns: 1fr 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
        "work work"
        "preview preview"
        "thumb1 thumb2";
    grid-column-gap: 0;
  }
  .work {
    padding: 20px 0;
  }
  .work__preview {
    padding: 20px;
  }
  .work__img {
    width: 280px;
    height: 220px;
  }
  .work__thumb-img {
    width: 120px;
    height: 60px;
  }
  .work__thumb-btn {
    transform: translate(-50%, -75%);
  }
  .about__title {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 36px;
    &:before,
    &:after {
      top: 50px;
    }
  }
  .testimonials__container {
    display: block;
    padding: 0 10px;
  }
  .testimonials__block {
    margin: 25px 0 0;
    &:first-child {
      margin-top: 0;
    }
  }
  .testimonials__text {
    margin-bottom: 10px;
  }
  .testimonials__icon {
    margin: 0 auto 20px;
  }
  .testimonials__author {
    margin-right: 15px;
    width: 55px;
    height: 55px;
  }
  .testimonials__name {
    max-width: 220px;
  }
  .form-contact {
    width: 300px;
  }
  .form-contact__title {
    font-size: 24px;
  }
}
</style>
