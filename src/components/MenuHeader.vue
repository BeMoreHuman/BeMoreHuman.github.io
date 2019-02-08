<template>
  <div class="menu">
    <button v-on:click="showMenu" class="menu__button" aria-label="open menu"></button>
    <nav class="menu__nav">
      <ul class="menu__list">
        <li class="menu__item">
          <router-link to="/works" class="menu__link" v-on:click.native="removeOpenedMenuClass">Мои работы</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/blog" class="menu__link" v-on:click.native="removeOpenedMenuClass">Блог</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/about" class="menu__link" v-on:click.native="removeOpenedMenuClass">Обо мне</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/welcome" class="menu__link" v-on:click.native="removeOpenedMenuClass">Главная</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "MenuHeader",
  bodyClass: "",
  methods: {
    showMenu: function() {
      let menu = document.body.querySelector(".menu"),
        pageBody = document.querySelector(".page-body");

      menu.classList.toggle("menu--active");
      pageBody.classList.toggle("menuOpened");
    },
    removeOpenedMenuClass: function() {
      let pageBody = document.querySelector(".page-body");

      pageBody.classList.remove("menuOpened");
    }
  }
};
</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: transparent;
  transition: all 0.4s ease;
  &__button {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 35px;
    background: url("../assets/images/icons/hamburger.svg") no-repeat center /
      contain;
    &:focus {
      /*outline: none;*/
    }
  }
  &__nav {
    display: none;
    justify-content: center;
    padding-top: 80px;
  }
  &__list {
  }
  &__item {
    margin-bottom: 85px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link {
    position: relative;
    padding: 0 60px;

    font-family: BERNIERRegular;
    color: #fff;
    font-size: 63px;
    line-height: 1;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 30px;
      height: 5px;

      background: rgba(255, 255, 255, 0.6);
    }
    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;

      width: 30px;
      height: 5px;

      background: rgba(255, 255, 255, 0.6);
    }
  }
  &--active {
    z-index: 10;
    background: rgba($accent-color, 0.9);
    .menu__nav {
      display: flex;
    }
    .menu__button {
      background-image: url("../assets/images/icons/close_menu.svg");
    }
  }
  @media all and (max-width: 960px) and (orientation: landscape) {
    &__item {
      margin-bottom: 25px;
    }
    &__link {
      font-size: 30px;
    }
  }
  @media all and (max-width: 767px) {
    &__item {
      margin-bottom: 35px;
    }
    &__link {
      padding-left: 45px;
      padding-right: 45px;
      font-size: 36px;
    }
    &__button {
      width: 20px;
      height: 20px;
    }
    @media all and (orientation: landscape) {
      &__nav {
        padding-top: 40px;
      }
    }
  }
}
</style>
