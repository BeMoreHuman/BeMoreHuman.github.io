<template>
  <div class="menu">
    <!--<button v-on:click="showMenu" class="menu__button" aria-label="open menu"></button>-->
    <button v-on:click="showMenu" class="menu__btn" aria-label="open menu">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
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
          <router-link to="/welcome" class="menu__link" v-on:click.native="removeOpenedMenuClass">Авторизация</router-link>
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
  &__btn {
    position: absolute;
    z-index: 5;
    top: 30px;
    right: 30px;
    width: 60px;
    height: 45px;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    outline: none;
    span {
      display: block;
      position: absolute;
      height: 9px;
      width: 50%;
      background: #fff;
      opacity: 1;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
      &:nth-child(even) {
        left: 50%;
        border-radius: 0 9px 9px 0;
      }
      &:nth-child(odd) {
        left: 0;
        border-radius: 9px 0 0 9px;
      }
      &:nth-child(1),
      &:nth-child(2) {
        top: 0;
      }
      &:nth-child(3),
      &:nth-child(4) {
        top: 18px;
      }
      &:nth-child(5),
      &:nth-child(6) {
        top: 36px;
      }
    }
  }
  &__button {
    display: none;
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
    padding-top: 100px;
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
      top: 30px;
      width: 30px;
      height: 5px;

      background: rgba(255, 255, 255, 0.6);
    }
    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 30px;

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
    .menu__btn {
      span {
        &:nth-child(1),
        &:nth-child(6) {
          transform: rotate(45deg);
        }
        &:nth-child(2),
        &:nth-child(5) {
          transform: rotate(-45deg);
        }
        &:nth-child(1) {
          left: 5px;
          top: 7px;
        }
        &:nth-child(2) {
          left: calc(50% - 5px);
          top: 7px;
        }
        &:nth-child(3) {
          left: -50%;
          opacity: 0;
        }
        &:nth-child(4) {
          left: 100%;
          opacity: 0;
        }
        &:nth-child(5) {
          left: 5px;
          top: 29px;
        }
        &:nth-child(6) {
          left: calc(50% - 5px);
          top: 29px;
        }
      }
    }
  }
}
</style>
