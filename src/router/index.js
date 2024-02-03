import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import ProductCatalogue from '../views/product/Index.vue'
import ProductPage from '../views/product/Show.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'

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
    }
  ]
})

export default router
