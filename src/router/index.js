import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/courses",
      component: () => import("../pages/Courses.vue"),
    },
    {
      path: "/resume",
      component: () => import("../pages/Resume.vue"),
    },
    {
      path: "/portfolio",
      component: () => import("../pages/Portfolio.vue"),
    },
    // Portfolio items
    {
      path: "/portfolio/sd-1",
      component: () =>
        import("../portfolio-items/software-development/sd-1.vue"),
    },
    {
      path: "/portfolio/sd-2",
      component: () =>
        import("../portfolio-items/software-development/sd-2.vue"),
    },
    {
      path: "/portfolio/sd-3",
      component: () =>
        import("../portfolio-items/software-development/sd-3.vue"),
    },
    {
      path: "/portfolio/sd-4",
      component: () =>
        import("../portfolio-items/software-development/sd-4.vue"),
    },
    {
      path: "/portfolio/sd-5",
      component: () =>
        import("../portfolio-items/software-development/sd-5.vue"),
    },
    {
      path: "/portfolio/sd-6",
      component: () =>
        import("../portfolio-items/software-development/sd-6.vue"),
    },
    {
      path: "/portfolio/sd-7",
      component: () =>
        import("../portfolio-items/software-development/sd-7.vue"),
    },
    {
      path: "/portfolio/sd-8",
      component: () =>
        import("../portfolio-items/software-development/sd-8.vue"),
    },
    {
      path: "/portfolio/sd-9",
      component: () =>
        import("../portfolio-items/software-development/sd-9.vue"),
    },
    {
      path: "/portfolio/sd-10",
      component: () =>
        import("../portfolio-items/software-development/sd-10.vue"),
    },
    {
      path: "/portfolio/gd-1",
      component: () => import("../portfolio-items/gis-development/gd-1.vue"),
    },
    {
      path: "/portfolio/gd-2",
      component: () => import("../portfolio-items/gis-development/gd-2.vue"),
    },
    {
      path: "/portfolio/gd-3",
      component: () => import("../portfolio-items/gis-development/gd-3.vue"),
    },
    {
      path: "/portfolio/gd-4",
      component: () => import("../portfolio-items/gis-development/gd-4.vue"),
    },
    {
      path: "/portfolio/gd-5",
      component: () => import("../portfolio-items/gis-development/gd-5.vue"),
    },
    {
      path: "/portfolio/gd-6",
      component: () => import("../portfolio-items/gis-development/gd-6.vue"),
    },
    {
      path: "/portfolio/gd-7",
      component: () => import("../portfolio-items/gis-development/gd-7.vue"),
    },
    {
      path: "/portfolio/gd-8",
      component: () => import("../portfolio-items/gis-development/gd-8.vue"),
    },
  ],
});
