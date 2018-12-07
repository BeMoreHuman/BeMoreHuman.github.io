<template>
  <div class="about">
    <section class="hero-section">
      <div class="hero__social">
        <SocialLinks/>
      </div>
      <MenuHeader/>
      <HeroBlock/>
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
          <!--<div class="about-article__photo"></div>-->
          <h3 class="about-article__subtitle">Кто я</h3>
          <p class="about-article__text">Я веб разработчик  из Днепра. Мне 24 года. Я занимаюсь разработкой современныз сайтов и приложений. Мне нравится делать интересные и современные проекты.</p>
          <p class="about-article__text">Этот сайт я сделал в рамках обучения VueJS.</p>
        </div>
      </article>
      <article class="about-article about-article--right">
        <h3 class="about-article__subtitle">Чем я могу быть вам полезен</h3>
        <p class="about-article__text">Больше всего меня привлекает Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.</p>
        <SkillList
          skillsTitle="Frontend"
          :skillsList="[
            {
              skillName: 'HTML',
              skillLevel: '80'
            },
            {
              skillName: 'CSS',
              skillLevel: '80'
            },
            {
              skillName: 'JS',
              skillLevel: '80'
            },
          ]"
        />
        <SkillList
            skillsTitle="Workflow"
            :skillsList="[
            {
              skillName: 'Git',
              skillLevel: '60'
            },
            {
              skillName: 'Gulp',
              skillLevel: '60'
            },
            {
              skillName: 'Webpack',
              skillLevel: '60'
            },
          ]"
        />
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
    <Footer/>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
import Footer from "@/components/Footer.vue";
import HeroBlock from "@/components/HeroBlock.vue";
import SkillList from "@/components/SkillList.vue";
import MenuHeader from "@/components/MenuHeader.vue";

/* eslint-disable no-console */

export default {
  name: "About",
  components: {
    SocialLinks,
    Footer,
    HeroBlock,
    SkillList,
    MenuHeader
  },
  data: function() {
    return {};
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
  &__title {
    position: relative;
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
      left: 80px;
      top: 90px;

      width: 22px;
      height: 5px;

      background: rgba(55, 62, 66, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 90px;
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

.menu-button {
  width: 40px;
  height: 35px;
  background: url("../assets/images/icons/hamburger.svg") no-repeat center /
    contain;
}

@media all and (max-width: 1799px) {
}
</style>
