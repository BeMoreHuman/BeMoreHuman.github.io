<template>
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
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
export default {
  name: "Footer",
  components: {
    SocialLinks
  }
};
</script>

<style scoped lang="scss">
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
</style>
