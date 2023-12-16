
import { createWebHistory, createRouter } from "vue-router";


import Home from "./pages/home.vue";
import Inner from "./components/inner.vue";
import Cart from "./pages/cart.vue"; 


const routes = [
  {
    path: "/Inner",
    name: "Inner",
    component: Inner,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
