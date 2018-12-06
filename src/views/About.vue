<template>
  <div class="about">
    <section class="hero-section">
      <div class="hero__social">
        <SocialLinks/>
      </div>
      <div class="hero__menu">
        <button class="menu-button" aria-label="open menu"></button>
      </div>
      <div class="hero-block">
        <div class="hero-block__bg"></div>
        <div class="hero-block__photo"></div>
        <div class="hero-block__name">Александр Клименко</div>
        <p class="hero-block__position">Личный сайт веб разработчика</p>
      </div>
      <button class="hero__arrow-down" aria-label="scroll down"></button>
    </section>
    <section class="about-section">
      <svg class="about-section__triangles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 85" preserveAspectRatio="none" width="1800" height="150">
        <polygon class="left" points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
        <polygon class="right" points="1000,0   1000,86   500,86   500,75.5"></polygon>
      </svg>
      <article class="about-article about-article--left">
        <div class="about-article__block">
          <h2 class="about-article__title">Обо мне</h2>
        </div>
        <div class="about-article__block">
          <div class="about-article__photo"></div>
          <h3 class="about-article__subtitle">Кто я</h3>
          <p class="about-article__text">Я веб разработчик  из Днепра. Мне 24 года. Я занимаюсь разработкой современныз сайтов и приложений. Мне нравится делать интересные и современные проекты.</p>
          <p class="about-article__text">Этот сайт я сделал в рамках обучения VueJS.</p>
        </div>
      </article>
      <article class="about-article about-article--right">
        <h3 class="about-article__subtitle">Чем я могу быть вам полезен</h3>
        <p class="about-article__text">Больше всего меня привлекает Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.</p>
        <div v-for="item in qualification" class="about-article__skills">
          <h4 class="skills__title">{{item.occupation}}</h4>
          <ul class="skills__list">
            <li v-for="skill in item.skillList" class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle v-bind:class="'circle__' + skill.skillLevel" class="circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)"></circle>
              </svg>
              <p class="skills__name">{{skill.skillTitle}}{{skill.skillLevel}}</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
    <section class="map-section">
      <div class="contact-block">
        <h3 class="contact-block__title">Контакты</h3>
        <p class="contact-block__text contact-block__text--sk">skype_kav</p>
        <p class="contact-block__text contact-block__text--mail">klymenko.sasha21@gmail.com</p>
        <p class="contact-block__text contact-block__text--tel">+38 093 012 08 39</p>
        <p class="contact-block__text contact-block__text--add">г.Днепр, Украина</p>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__row">
        <nav class="footer__menu">
          <ul class="menu__list">
            <li class="menu__item">
              <router-link to="/works" class="menu__link">Мои работы</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/about" class="menu__link">Обо мне</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/blog" class="menu__link">Блог</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/welcome" class="menu__link">Авторизация</router-link>
            </li>
          </ul>
        </nav>
        <div class="footer__social">
          <SocialLinks/>
        </div>
      </div>
      <div class="footer__row">
        <p class="footer__text">
          Я веб разработчик из Днепра.
        </p>
        <p class="footer__text">
          Александр Клименко | создано в рамках обучения VueJS | 2018
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";

/* eslint-disable no-console */

export default {
  name: "About",
  components: {
    SocialLinks
  },
  data: function() {
    return {
      qualification: [
        {
          occupation: "Frontend",
          skillList: [
            {
              skillTitle: "HTML",
              skillLevel: "80"
            },
            {
              skillTitle: "CSS",
              skillLevel: "80"
            },
            {
              skillTitle: "JS",
              skillLevel: "80"
            }
          ]
        },
        {
          occupation: "Backend",
          skillList: [
            {
              skillTitle: "Ruby",
              skillLevel: "20"
            },
            {
              skillTitle: "mySQL",
              skillLevel: "20"
            },
            {
              skillTitle: "Node.js",
              skillLevel: "20"
            }
          ]
        },
        {
          occupation: "Workflow",
          skillList: [
            {
              skillTitle: "Git",
              skillLevel: "50"
            },
            {
              skillTitle: "Gulp",
              skillLevel: "50"
            },
            {
              skillTitle: "Webpack",
              skillLevel: "50"
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.about {
  position: relative;
}
.about-section {
  position: relative;
  display: flex;
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
      fill: #efeee9;
    }
    .right {
      fill: #eeebdf;
    }
  }
}
.about-article {
  position: relative;
  padding: 0 40px 70px;
  flex-basis: 50%;
  &--left {
    display: flex;
    background: #efeee9;
  }
  &--right {
    background: #eeebdf;
  }
  &__block {
    flex-basis: 50%;
  }
  &__title {
    position: relative;
    display: inline-block;
    padding: 60px 80px 20px;
    text-align: center;

    font-family: BERNIERRegular;
    color: #373e42;
    font-size: 63px;
    line-height: 1;

    background: url("../assets/images/background_titles/about_header.svg")
      no-repeat center / contain;
    &:before {
      content: "";
      position: absolute;
      left: 40px;
      top: 90px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 40px;
      top: 90px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__photo {
    margin: 0 auto;
    width: 440px;
    height: 390px;
    background: #ccc;
  }
  &__subtitle {
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
  &__text {
    margin-bottom: 10px;
    text-align: left;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgba(69, 90, 100, 0.8);
  }
  &__skills {
    padding-top: 40px;
    text-align: left;
  }
}

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
.hero-block {
  position: relative;
  padding: 20px 0;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/background_titles/portfolio_header.svg")
      no-repeat center / contain;
  }
  &__photo {
    position: relative;
    margin: 0 auto;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #ccc;
  }
  &__name {
    position: relative;
    margin-top: 20px;

    font-family: Roboto, sans-serif;
    font-size: 35px;
    font-weight: 500;
    line-height: 1;
    color: #fff;
  }
  &__position {
    position: relative;
    margin-top: 10px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    color: #fff;
  }
}

.map-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 144px;

  background: url("../assets/images/background_images/about_map.jpg") no-repeat
    center / cover;
}
.contact-block {
  padding: 35px 40px 40px;
  border-radius: 5px;
  background-color: rgba(252, 252, 252, 0.85);
  &__title {
    position: relative;
    display: inline-block;
    text-align: center;
    padding-bottom: 40px;

    font-family: BERNIERRegular;
    color: #373e42;
    font-size: 35px;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      left: -35px;
      top: 17px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: -35px;
      top: 17px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
  }
  &__text {
    margin-bottom: 25px;
    padding-left: 35px;
    text-align: left;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5625;
    color: rgba(69, 90, 100, 0.8);
    &:last-child {
      margin-bottom: 0;
    }
    &--sk {
      background: url("../assets/images/icons/skype.svg") no-repeat center left /
        24px 24px;
    }
    &--mail {
      background: url("../assets/images/icons/envelope.svg") no-repeat center
        left / 23px 17px;
    }
    &--tel {
      background: url("../assets/images/icons/phone.svg") no-repeat center left /
        19px 18px;
    }
    &--add {
      background: url("../assets/images/icons/map_marker.svg") no-repeat center
        left / 19px 24px;
    }
  }
}

.skills {
  &__title {
    margin-bottom: 20px;

    font-family: Roboto, sans-serif;
    font-size: 28px;
    font-weight: 500;
    color: rgb(69, 90, 100);
  }
  &__list {
    display: flex;
  }
  &__circle {
    /*width: 100%;*/
    /*height: 100%;*/
  }
  &__item {
    position: relative;
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__name {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    font-family: Roboto, sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0, 191, 165, 1);
  }
}
.circle {
  fill: none;
  stroke-width: 20;
  &__first {
    stroke: #dfdcd5;
  }
  &__second {
    stroke: #1bb696;
    stroke-dasharray: 0 282.6;
    stroke-opacity: 0.9;
  }
  &__10 {
    stroke-dasharray: 28.26 282.6;
  }
  &__20 {
    stroke-dasharray: 56.52 282.6;
  }
  &__30 {
    stroke-dasharray: 84.78 282.6;
  }
  &__40 {
    stroke-dasharray: 113.04 282.6;
  }
  &__50 {
    stroke-dasharray: 141.3 282.6;
  }
  &__60 {
    stroke-dasharray: 169.56 282.6;
  }
  &__70 {
    stroke-dasharray: 197.82 282.6;
  }
  &__80 {
    stroke-dasharray: 226.08 282.6;
  }
  &__90 {
    stroke-dasharray: 254.34 282.6;
  }
  &__100 {
    stroke-dasharray: 282.6 282.6;
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;

  color: #fff;
  background: rgba(55, 62, 66, 0.85);
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    &:last-child {
      border-bottom: none;
    }
  }
  &__menu {
  }
  &__social {
  }
  &__text {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
}

.menu {
  &__list {
    display: flex;
  }
  &__item {
    margin-right: 40px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
}
.menu-button {
  width: 40px;
  height: 35px;
  background: url("../assets/images/icons/hamburger.svg") no-repeat center /
    contain;
}
.social {
  display: flex;
  align-items: center;
  justify-content: center;
  &__item {
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }
  }
  &__link {
    svg {
      fill: rgba(255, 255, 255, 0.5);
    }
    &:hover,
    &:focus {
      outline: none;
      svg {
        fill: rgba(255, 255, 255, 1);
      }
    }
  }
}

@media all and (max-width: 1799px) {
}
</style>
