<template>
  <div class="blog">
    <section class="hero-section">
      <div class="hero__social">
        <SocialLinks/>
      </div>
      <MenuHeader/>
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
          <BlogPost
              title="Доступная верстка"
              date="21 ноября 2018"
              textContent="Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям."/>
          <BlogPost
              title="Основы VueJS"
              date="17 января 2019"
              textContent="Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям."/>
          <BlogPost
              title="Разбиение SCSS стилей"
              date="февраль 2019"
              textContent="Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям."/>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
import Footer from "@/components/Footer.vue";
import BlogPost from "@/components/BlogPost.vue";
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  name: "Blog",
  components: {
    SocialLinks,
    Footer,
    BlogPost,
    MenuHeader
  }
};
</script>

<style scoped lang="scss">
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
@media all and (max-width: 767px) {
  .hero-section {
    padding-top: 100px;
    padding-bottom: 0;
    min-height: auto;
    height: 90vh;
  }
  .hero-block {
    padding: 0;
  }
  .blog-section__triangles {
    height: 30px;
  }
  .blog__container {
    display: block;
    padding: 20px;
    max-width: 100%;
  }
  .blog-aside {
    display: none;
  }
  .blog__wrapper {
    padding-left: 0;
    max-width: 100%;
  }
  .blog {
    padding-bottom: 0;
  }
  .blog-section {
    padding-bottom: 205px;
  }
}
</style>
