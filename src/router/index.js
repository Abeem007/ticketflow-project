import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../pages/LandingPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignupPage from "../pages/SignupPage.vue";
import Dashboard from "../pages/Dashboard.vue";
import TicketManagement from "../pages/TicketManagement.vue";

const routes = [
  { path: "/", name: "Landing", component: LandingPage },
  { path: "/auth/login", name: "Login", component: LoginPage },
  { path: "/auth/signup", name: "Signup", component: SignupPage },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requireAuth: true },
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: TicketManagement,
      meta: { requireAuth: true },
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("ticketapp_session");

  if (to.meta.requireAuth && !isAuthenticated) {
    localStorage.setItem(
      "auth_message",
      "Your session has expired - please log in again."
    );
    localStorage.setItem("auth_redirect", to.fullPath);
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
