<template>
  <div class="practice">
    <button v-on:click="isShow = !isShow">show / hide</button>
    <ul v-show="isShow" class="practice__list">
      <li v-for="item in list" :key="item.id" class="item">
        <p>{{ item.name }}</p>
        <p>{{ item.lastName }}</p>
        <p>{{ item.year }}</p>
      </li>
    </ul>

    <div class="practice__list" v-for="skill in skills">
      <h4 class="skills__title">{{skill.title}}</h4>
      <ul class="skills__list" v-for="skillItem in skill.skillList">
        <li class="skills__item">
          <p class="skills__name">{{skillItem}}</p>
        </li>
      </ul>
    </div>

    <hr>
    <hr>
    <div class="practice__wrap">
      <h2>Cats</h2>
      <div v-for="(cat,n) in cats" class="practice__block">
        <p>
          <span class="practice__span">{{cat}}</span> <button @click="removeCat(n)" class="practice__remove">Remove</button>
        </p>
      </div>

      <p class="practice__row">
        <input v-model="newCat" v-on:keyup.enter="addCat" class="practice__input">
        <button @click="addCat" class="practice__add">Add Cat</button>
      </p>
    </div>
    <hr>
    <hr>
    <div class="practice__wrap">
      <p>{{localStorage.lang}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: "Practice",
  data: function() {
    return {
      isShow: true,
      list: [
        {
          name: "name_1",
          lastName: "lastname_1",
          year: 11,
          id: 1231
        },
        {
          name: "name_2",
          lastName: "lastname_2",
          year: 22,
          id: 1232
        },
        {
          name: "name_3",
          lastName: "lastname_3",
          id: 1233
        }
      ],
      skills: [
        {
          title: "Frontend",
          skillList: ["HTML", "CSS", "JS"]
        },
        {
          title: "Backend",
          skillList: ["Ruby", "mySQL", "Node.js"]
        },
        {
          title: "Workflow",
          skillList: ["Git", "Gulp", "Webpack"]
        }
      ],
      cats: [],
      newCat: null,
      localStorage: window.localStorage
    };
  },
  created: function() {
    this.localStorage.lang = "other value";
  },
  mounted() {
    if (localStorage.getItem("cats")) {
      try {
        this.cats = JSON.parse(localStorage.getItem("cats"));
      } catch (e) {
        localStorage.removeItem("cats");
      }
    }
  },
  methods: {
    addCat() {
      this.$ls.set("lang", this.newCat);
      this.$storage.set("test", [14, 123, 432], { ttl: 60 * 1000 });
      const data = this.$storage.get("test");
      console.log(data);
      // ensure they actually typed something
      if (!this.newCat) return;
      this.cats.push(this.newCat);
      this.newCat = "";
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      let parsed = JSON.stringify(this.cats);
      localStorage.setItem("cats", parsed);
    }
  }
};
</script>

<style lang="scss" scoped>
  .practice {
    padding-top: 50px;
    &__list {
      display: inline-block;
      margin: 0 20px;
      padding: 5px 15px;
      border: 2px solid black;
    }
    &__wrap {
      display: inline-block;
      padding: 30px 20px;
      border: 1px solid black;
    }
    &__block {
      padding: 10px 0;
    }
    &__row {
      margin-top: 10px;
    }
    &__span {
      display: inline-block;
      margin-right: 15px;
    }
    &__remove {
      padding: 2px 5px;
      border-radius: 5px;
      border: 1px solid rosybrown;
    }
    &__add {
      padding: 2px 5px;
      border-radius: 5px;
      border: 1px solid darkseagreen;
    }
    &__input {
      margin-right: 10px;
      border: 1px solid cornflowerblue;
      background: initial;
      color: initial;
    }
  }
</style>
