import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import ProductCatalogue from '../views/product/Index.vue'
import ProductPage from '../views/product/Show.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Profile from '../views/account/Profile.vue'
import middlewarePipeline from './middlewarePipeline.js';
import middleware from '../middleware/index.js'
import { useUserStore } from '../store/user.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/products',
      name: 'products.index',
      component: ProductCatalogue
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: ProductPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        middleware: [middleware.guest]
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        middleware: [middleware.guest]
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        middleware: [middleware.auth, middleware.testmdl]
      }
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.middleware) {
    const middleware = to.meta.middleware;
    const userStore = useUserStore();
    let context = [to, from, userStore];
    return middlewarePipeline(context, middleware, 0);
  }
})

export default router
