import { createRouter, createWebHashHistory } from "vue-router";

const routerOptions = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/overlay",
    name: "Overlay",
  },
  {
    path: "/commands",
    name: "Commands",
  },
  {
    path: "/redirect",
    name: "Redirect",
  },
];

const routes = routerOptions.map((route) => ({
  ...route,
  component: () => import(`@/views/${route.name}.vue`),
}));

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
