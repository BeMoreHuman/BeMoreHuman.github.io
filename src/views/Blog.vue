<template>
  <div class="blog">
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
        <div class="hero-block__photo"></div>
        <div class="hero-block__title">Блог</div>
        <p class="hero-block__desc">Статьи, которые я написал</p>
      </div>
    </section>
    <section class="blog-section">
      <svg class="blog-section__triangles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 85" preserveAspectRatio="none" width="1800" height="150">
        <polygon class="left" points="0,0   0,86   500.8,86   500.8,75.5"></polygon>
        <polygon class="right" points="1000,0   1000,86   500,86   500,75.5"></polygon>
      </svg>
      <div class="blog__container">
        <aside class="blog-aside">
          <ul class="blog-aside__list">
            <li class="blog-aside__item blog-aside__item--active">
              Доступная верстка
            </li>
            <li class="blog-aside__item">
              Основы VueJS
            </li>
            <li class="blog-aside__item">
              Разбиение SCSS стилей
            </li>
          </ul>
        </aside>
        <div class="blog__wrapper">
          <article class="blog-article">
            <h2 class="blog-article__title">Доступная верстка</h2>
            <div class="blog-article__date">21 ноября 2018</div>
            <div class="blog-article__content">
              <p class="blog-article__text">
                Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
              </p>
              <p class="blog-article__text">
                Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
              </p>
            </div>
          </article>
          <article class="blog-article">
            <h2 class="blog-article__title">Основы VueJS</h2>
            <div class="blog-article__date">17 января 2019</div>
            <div class="blog-article__content">
              <p class="blog-article__text">
                Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
              </p>
            </div>
          </article>
          <article class="blog-article">
            <h2 class="blog-article__title">Разбиение SCSS стилей</h2>
            <div class="blog-article__date">февраль 2019</div>
            <div class="blog-article__content">
              <p class="blog-article__text">
                Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
              </p>
            </div>
          </article>
        </div>
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
export default {
  name: "Blog"
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
.blog {
  position: relative;
  padding-bottom: 109px;
  &__container {
    display: flex;
    margin: 0 auto;
    padding: 0 120px;
    width: 100%;
    max-width: 1800px;
  }
  &__wrapper {
    padding-left: 120px;
    max-width: 1000px;
    text-align: left;
  }
}
.blog-aside {
  flex-basis: 300px;
  flex-shrink: 0;
  &__list {
    text-align: right;
  }
  &__item {
    margin-bottom: 15px;
    padding: 15px 20px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #455a64;
    &--active {
      font-weight: 500;
      color: #00bfa5;
      
      border-right: 3px solid #00bfa5;
    }
  }
}
.blog-article {
  position: relative;
  padding-top: 70px;
  padding-bottom: 60px;
  &__title {
    font-family: BERNIERRegular;
    font-size: 36px;
    color: #455a64;
  }
  &__date {
    margin-top: 20px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 191, 165, 0.7);
  }
  &__content {
    margin-top: 15px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #455a64;
  }
  &__text {
    margin-top: 10px;
    &:first-child {
      margin-top: 0;
    }
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 5px;
    background: rgba(55, 62, 66, 0.07);
  }
  &:first-child {
    padding-top: 0;
    &:before {
      height: 0;
    }
  }
}

.hero-section {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;
  min-height: 650px;

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
}
.hero-block {
  position: relative;
  padding: 140px 40px 40px;
  background: url("../assets/images/background_titles/blog_header.svg")
    no-repeat center bottom / 300px 200px;
  &__photo {
    position: relative;
    margin: 0 auto;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: #ccc;
  }
  &__title {
    position: relative;
    display: inline-block;
    padding: 20px 70px 0;

    font-family: BERNIERRegular;
    color: #fff;
    font-size: 63px;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      left: 30px;
      top: 50px;

      width: 22px;
      height: 5px;

      background: rgba(255, 255, 255, 0.2);
    }
    &:after {
      content: "";
      position: absolute;
      right: 30px;
      top: 50px;

      width: 22px;
      height: 5px;

      background: rgba(255, 255, 255, 0.2);
    }
  }
  &__desc {
    position: relative;
    margin-top: 10px;

    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.4;
    color: #fff;
  }
}

.blog-section {
  position: relative;
  margin-top: -80px;
  min-height: 650px;
  background: #fff;
  &__triangles {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-99%);
    fill: #fff;
    width: 100%;
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
.menu-button {
  width: 40px;
  height: 35px;
  background: url("../assets/images/icons/hamburger.svg") no-repeat center /
    contain;
}
</style>
