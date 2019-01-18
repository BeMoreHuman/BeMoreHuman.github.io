<template>
  <div class="hero-block">
    <div class="hero-block__bg"></div>
    <div class="hero-block__photo"></div>
    <div class="hero-block__name">Александр Клименко</div>
    <p class="hero-block__position">Личный сайт веб разработчика</p>
  </div>
</template>

<script>
export default {
  name: "HeroBlock"
};
</script>

<style scoped lang="scss">
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
  @media all and (max-width: 767px) {
    &__bg {
      background: none;
    }
    &__name {
      font-size: 24px;
    }
  }
}
</style>
