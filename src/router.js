import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login";
import StudentHomeDashboard from "./views/StudentHomeDashboard";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  linkExactActiveClass: "active",
  base: process.env.NODE_ENV === "development" ? "/" : "/",
  routes: [
    {
      path: "/",
      component: StudentHomeDashboard,
      name: "studentHomeDashboard",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    return next("/");
  }
  next();
});

export default router;
