<template>
  <div class="blog">
    <section class="hero-section">
      <div class="hero__social">
        <SocialLinks/>
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

export default {
  name: "Blog",
  components: {
    SocialLinks
  }
};
</script>

<style scoped lang="scss">
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
