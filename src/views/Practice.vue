<template>
  <div class="practice">
    <button v-on:click="isShow = !isShow">show / hide</button>
    <ul v-show="isShow" class="list">
      <li v-for="item in list" :key="item.id" class="item">
        <p>{{ item.name }}</p>
        <p>{{ item.lastName }}</p>
        <p>{{ item.year }}</p>
      </li>
    </ul>
    <hr>
    <hr>

    <div class="about-article__skills" v-for="skill in skills">
      <h4 class="skills__title">{{skill.title}}</h4>
      <ul class="skills__list" v-for="skillItem in skill.skillList">
        <li class="skills__item">
          <p class="skills__name">{{skillItem}}</p>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
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
      ]
    };
  }
};
</script>

<style scoped>
</style>
