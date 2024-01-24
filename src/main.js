import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Views/Home.vue";
import Backend from "./Views/Backend.vue";
import Frontend from "./Views/Frontend.vue";
import Artigos from "./Views/Artigos.vue";
import NotFound from "./Views/NotFound.vue";

import "primeicons/primeicons.css";

import "./assets/main.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/backend",
      name: "Backend",
      component: Backend,
    },
    {
      path: "/frontend",
      name: "Frontend",
      component: Frontend,
    },
    {
      path: "/artigos",
      name: "Artigos",
      component: Artigos,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

createApp(App).use(router).mount("#app");