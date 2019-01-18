<template>
  <div class="skills">
    <h4 class="skills__title">{{ skillsTitle }}</h4>
    <ul class="skills__list">
      <li v-for="skill in skillsList" class="skills__item">
        <svg class="skills__circle" viewBox="0 0 110 110" width="120" height="120">
          <circle class="skills__circle-first" r="45" cx="50%" cy="50%" fill="none"></circle>
          <circle v-bind:class="'skills__circle--' + skill.skillLevel" class="skills__circle-second" r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)"></circle>
        </svg>
        <p class="skills__name">{{skill.skillName}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SkillList",
  props: {
    skillsTitle: String,
    skillsList: Array
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.skills {
  padding-top: 40px;
  text-align: left;
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
  &__circle {
    fill: none;
    stroke-width: 20;
    &-first {
      stroke: #dfdcd5;
    }
    &-second {
      stroke: #1bb696;
      stroke-dasharray: 0 282.6;
      stroke-opacity: 0.9;
    }
    @for $i from 1 through 10 {
      &--#{$i * 10} {
        stroke-dasharray: (28.26 * $i) 282.6;
      }
    }
  }
  @media all and (max-width: 767px) {
    padding-top: 20px;
    text-align: center;
    &__list {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    &__item {
      margin: 10px;
    }
    &__circle {
      width: 110px;
      height: 110px;
    }
  }
}
</style>
