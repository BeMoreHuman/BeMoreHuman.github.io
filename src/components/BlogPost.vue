<template>
  <article class="blog-article">
    <h2 class="blog-article__title">{{ title }}</h2>
    <div class="blog-article__date">{{ date }}</div>
    <div class="blog-article__content">
      <p class="blog-article__text">
        {{ textContent }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    title: String,
    date: String,
    textContent: String
  }
};
</script>

<style scoped lang="scss">
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
    content: "";
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
</style>
