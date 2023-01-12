import Vue from "vue";
import Router from "vue-router";

import Login from "./views/Login";
import HomeDashboard from "./views/HomeDashboard";
import SectionPlanner from "./views/SectionPlanner";
import CourseCatalog from "./views/CourseCatalog";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  linkExactActiveClass: "active",
  base:
    //    process.env.NODE_ENV === 'development'? "/" : "/schedule-t3/", - for AWS
    process.env.NODE_ENV === "development" ? "/" : "/",
  routes: [
    {
      path: "/",
      component: Login,
      name: "login",
    },
    {
      path: "/HomeDashboard",
      component: HomeDashboard,
      name: "homeDashboard",
    },
    {
      path: "/SectionPlanner",
      component: SectionPlanner,
      name: "sectionPlanner",
    },
    {
      path: "/CourseCatalog",
      component: CourseCatalog,
      name: "courseCatalog",
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    return next("/");
  }
  next();
});

export default router;
