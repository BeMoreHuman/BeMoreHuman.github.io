import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () =>
        import(/* webpackChunkName: "welcome" */ "./views/Welcome.vue")
    },
    {
      path: "/works",
      name: "works",
      component: () =>
        import(/* webpackChunkName: "works" */ "./views/Works.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue")
    },
    {
      path: "/practice",
      name: "practice",
      component: () =>
        import(/* webpackChunkName: "practice" */ "./views/Practice.vue")
    }
  ]
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
});
