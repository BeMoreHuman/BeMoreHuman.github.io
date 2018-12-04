<template>
  <div class="about">
    <section class="hero-section">
      <div class="hero__social">
        <ul class="social">
          <li class="social__item">
            <a href="" class="social__link social__link--fb" aria-label="facebook" target="_blank"
               rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17">
                <path d="M27.625 5.832c-3.031 4.031-3.359 3.656-.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 .063c-.859.172-2-.609-2-.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125.359-1.094 2.766.016.516-.234.797-.234.797s-.281.297-.828.344h-1.797c-3.953.25-7.438-3.391-7.438-3.391S3.437 9.707.093 1.848c-.219-.516.016-.766.016-.766S.343.785 1 .785L5.281.754c.406.063.688.281.688.281s.25.172.375.5c.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.438 0 0 .797-.484.625-4.375-.063-1.406-.453-2.047-.453-2.047-.359-.485-1.031-.625-1.328-.672-.234-.031.156-.594.672-.844.766-.375 2.125-.391 3.734-.375 1.266.016 1.625.094 2.109.203 1.484.359.984 1.734.984 5.047 0 1.063-.203 2.547.563 3.031.328.219 1.141.031 3.141-3.375 0 0 .938-1.625 1.672-3.516.125-.344.391-.484.391-.484s.25-.141.594-.094l4.5-.031c1.359-.172 1.578.453 1.578.453.234.641-.501 2.141-2.344 4.594z"/>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a href="" class="social__link social__link--gh" aria-label="github" target="_blank"
               rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22">
                <path d="M25.047 17.422C22.984 21.594 17.313 22 13.25 22 9.125 22 3.109 21.641.969 17.422.172 15.844 0 13.984 0 12.25c0-2.281.625-4.438 2.125-6.188a8.585 8.585 0 0 1-.422-2.656c0-1.172.266-2.343.797-3.406 2.469 0 4.047 1.078 5.922 2.547A20.895 20.895 0 0 1 13.25 2c1.469 0 2.953.156 4.375.5C19.484 1.047 21.063 0 23.5 0a7.629 7.629 0 0 1 .797 3.406c0 .891-.141 1.781-.422 2.625C25.375 7.797 26 9.969 26 12.25c0 1.734-.172 3.578-.953 5.172zM18.5 10.5c-1.031 0-2.016.188-3.047.328-.812.125-1.625.172-2.453.172s-1.641-.047-2.453-.172c-1.016-.14-2.016-.328-3.047-.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-.734 8.188-5.516-.001-2.391-1.454-4.5-4.001-4.5zM8 18c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3zm10 0c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3z"/>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a href="" class="social__link social__link--lin" aria-label="linkedIn" target="_blank"
               rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22">
                <path d="M2.875 5.344h-.031C1.109 5.344 0 4.156 0 2.672 0 1.156 1.156 0 2.906 0c1.766 0 2.859 1.156 2.875 2.672.016 1.484-1.109 2.672-2.906 2.672zm2.578 17.594H.297V7.453h5.156v15.485zm18.547 0h-5.141v-8.281c0-2.078-.75-3.5-2.609-3.5-1.422 0-2.266.953-2.641 1.875-.125.344-.172.797-.172 1.266v8.641h-5.14c.063-14.031 0-15.484 0-15.484h5.141v2.25h-.031c.672-1.063 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969v8.873z"/>
              </svg>
            </a>
          </li>
        </ul>
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
        <div class="about-article__skills">
          <h4 class="skills__title">Frontend</h4>
          <ul class="skills__list">
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">HTML</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">CSS</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">JavaScript</p>
            </li>
          </ul>
        </div>
        <div class="about-article__skills">
          <h4 class="skills__title">Backend</h4>
          <ul class="skills__list">
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">Node.js & npm</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">mySQL</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">Ruby</p>
            </li>
          </ul>
        </div>
        <div class="about-article__skills">
          <h4 class="skills__title">Workflow</h4>
          <ul class="skills__list">
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">Git</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">Gulp</p>
            </li>
            <li class="skills__item">
              <svg class="skills__circle circle" viewBox="0 0 110 110" width="120" height="120">
                <circle class="circle__first" r="45" cx="50%" cy="50%" fill="none"></circle>
                <circle class="circle-90 circle__second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" style="transition-delay: 0s;"></circle>
              </svg>
              <p class="skills__name">Webpack</p>
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
          <ul class="footer-social">
            <li class="footer-social__item">
              <a href="" class="footer-social__link footer-social__link--fb" aria-label="facebook" target="_blank"
                 rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="17">
                  <path d="M27.625 5.832c-3.031 4.031-3.359 3.656-.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 .063c-.859.172-2-.609-2-.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125.359-1.094 2.766.016.516-.234.797-.234.797s-.281.297-.828.344h-1.797c-3.953.25-7.438-3.391-7.438-3.391S3.437 9.707.093 1.848c-.219-.516.016-.766.016-.766S.343.785 1 .785L5.281.754c.406.063.688.281.688.281s.25.172.375.5c.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.438 0 0 .797-.484.625-4.375-.063-1.406-.453-2.047-.453-2.047-.359-.485-1.031-.625-1.328-.672-.234-.031.156-.594.672-.844.766-.375 2.125-.391 3.734-.375 1.266.016 1.625.094 2.109.203 1.484.359.984 1.734.984 5.047 0 1.063-.203 2.547.563 3.031.328.219 1.141.031 3.141-3.375 0 0 .938-1.625 1.672-3.516.125-.344.391-.484.391-.484s.25-.141.594-.094l4.5-.031c1.359-.172 1.578.453 1.578.453.234.641-.501 2.141-2.344 4.594z"/>
                </svg>
              </a>
            </li>
            <li class="footer-social__item">
              <a href="" class="footer-social__link footer-social__link--gh" aria-label="github" target="_blank"
                 rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22">
                  <path d="M25.047 17.422C22.984 21.594 17.313 22 13.25 22 9.125 22 3.109 21.641.969 17.422.172 15.844 0 13.984 0 12.25c0-2.281.625-4.438 2.125-6.188a8.585 8.585 0 0 1-.422-2.656c0-1.172.266-2.343.797-3.406 2.469 0 4.047 1.078 5.922 2.547A20.895 20.895 0 0 1 13.25 2c1.469 0 2.953.156 4.375.5C19.484 1.047 21.063 0 23.5 0a7.629 7.629 0 0 1 .797 3.406c0 .891-.141 1.781-.422 2.625C25.375 7.797 26 9.969 26 12.25c0 1.734-.172 3.578-.953 5.172zM18.5 10.5c-1.031 0-2.016.188-3.047.328-.812.125-1.625.172-2.453.172s-1.641-.047-2.453-.172c-1.016-.14-2.016-.328-3.047-.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-.734 8.188-5.516-.001-2.391-1.454-4.5-4.001-4.5zM8 18c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3zm10 0c-1.406 0-2-1.859-2-3s.594-3 2-3 2 1.859 2 3-.594 3-2 3z"/>
                </svg>
              </a>
            </li>
            <li class="footer-social__item">
              <a href="" class="footer-social__link footer-social__link--lin" aria-label="linkedIn" target="_blank"
                 rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22">
                  <path d="M2.875 5.344h-.031C1.109 5.344 0 4.156 0 2.672 0 1.156 1.156 0 2.906 0c1.766 0 2.859 1.156 2.875 2.672.016 1.484-1.109 2.672-2.906 2.672zm2.578 17.594H.297V7.453h5.156v15.485zm18.547 0h-5.141v-8.281c0-2.078-.75-3.5-2.609-3.5-1.422 0-2.266.953-2.641 1.875-.125.344-.172.797-.172 1.266v8.641h-5.14c.063-14.031 0-15.484 0-15.484h5.141v2.25h-.031c.672-1.063 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969v8.873z"/>
                </svg>
              </a>
            </li>
          </ul>
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
/* eslint-disable no-console */

export default {
  name: "About",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@font-face {
  font-family: "BERNIERRegular";
  src: url("../assets/fonts/bernier/BERNIERRegular-Regular.otf")
    format("opentype");
  font-weight: 400;
  font-style: normal;
}
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
    stroke-dasharray: 200;
    stroke-opacity: 0.9;
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
.footer-social {
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
</style>
