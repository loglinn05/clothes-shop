<template>
  <!-- ========================= HEADER ========================= -->
  <div id="header" class="fixed-top bg-light">
    <header class="section-header">
      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-12 mb-lg-0 mb-2 brand-logo d-none d-sm-block">
              Fashion Art
            </div>
            <div class="col-lg-5 col-md-7 col-12 mb-2 mb-md-0">
              <form action="#" class="search mb-md-0">
                <div class="input-group w-100">
                  <input type="text" class="form-control" placeholder="Пошук">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 col-md-5 col-12 d-flex justify-content-start justify-content-md-end">
              <div class="widgets-wrap float-md-end">
                <a class="btn btn-outline-primary position-relative me-3"
                   data-bs-toggle="offcanvas" href="#cartOffcanvas"
                   role="button" aria-controls="cartOffcanvas">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" v-if="cart.length != 0">
                    {{ cart.length }}
                    <span class="visually-hidden">products in cart</span>
                  </span>
                </a>
                <div class="icontext">
                  <a href="#" class="btn btn-outline-primary me-3">
                    <i class="fa-solid fa-user"></i>
                  </a>
                  <div class="text">
                    <span class="text-muted">Ласкаво просимо!</span>
                    <div>
                      <a href="#">Увійти</a> |
                      <a href="#"> Зареєструватися</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <router-link class="nav-link py-lg-0" :to="'/'">Головна</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link py-lg-0" :to="'/products'">Каталог</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <!-- ========================= HEADER END // ========================= -->

  <router-view></router-view>

  <!-- ========================= FOOTER ========================= -->
  <footer class="section-footer border-top bg">
    <div class="container">
      <section class="footer-top  padding-y">
        <div class="row">
          <aside class="col-md col-6">
            <h6 class="title">Brands</h6>
            <ul class="list-unstyled">
              <li> <a href="#">Adidas</a></li>
              <li> <a href="#">Puma</a></li>
              <li> <a href="#">Reebok</a></li>
              <li> <a href="#">Nike</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Company</h6>
            <ul class="list-unstyled">
              <li> <a href="#">About us</a></li>
              <li> <a href="#">Career</a></li>
              <li> <a href="#">Find a store</a></li>
              <li> <a href="#">Rules and terms</a></li>
              <li> <a href="#">Sitemap</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Help</h6>
            <ul class="list-unstyled">
              <li> <a href="#">Contact us</a></li>
              <li> <a href="#">Money refund</a></li>
              <li> <a href="#">Order status</a></li>
              <li> <a href="#">Shipping info</a></li>
              <li> <a href="#">Open dispute</a></li>
            </ul>
          </aside>
          <aside class="col-md col-6">
            <h6 class="title">Account</h6>
            <ul class="list-unstyled">
              <li> <a href="#"> User Login </a></li>
              <li> <a href="#"> User register </a></li>
              <li> <a href="#"> Account Setting </a></li>
              <li> <a href="#"> My Orders </a></li>
            </ul>
          </aside>
          <aside class="col-md">
            <h6 class="title">Social</h6>
            <ul class="list-unstyled">
              <li><a href="#"> <i class="fab fa-facebook"></i> Facebook </a></li>
              <li><a href="#"> <i class="fab fa-twitter"></i> Twitter </a></li>
              <li><a href="#"> <i class="fab fa-instagram"></i> Instagram </a></li>
              <li><a href="#"> <i class="fab fa-youtube"></i> Youtube </a></li>
            </ul>
          </aside>
        </div>
      </section>
      <section class="footer-bottom row">
        <div class="col-md-2">
          <p class="text-muted">   2021 Company name </p>
        </div>
        <div class="col-md-8 text-md-center">
          <span  class="px-2">info@com</span>
          <span  class="px-2">+000-000-0000</span>
          <span  class="px-2">Street name 123, ABC</span>
        </div>
        <div class="col-md-2 text-md-end text-muted">
          <i class="fab fa-lg fa-cc-visa"></i>
          <i class="fab fa-lg fa-cc-paypal"></i>
          <i class="fab fa-lg fa-cc-mastercard"></i>
        </div>
      </section>
    </div>
  </footer>
  <!-- ========================= FOOTER END // ========================= -->

  <!-- =========================== OFFCANVAS =========================== -->
  <div class="offcanvas offcanvas-end" tabindex="-1"
       id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartOffcanvasLabel">Кошик</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="d-flex flex-column" v-if="cart.length">
        <ul class="list-group list-group-flush px-0">
          <li class="list-group-item" v-for="item in cart">
            {{item.product.title}}
            <p class="m-0">
              <s class="me-3">${{ item.product.old_price }}</s>
              <span class="badge bg-primary"
                    v-if="item.product.old_price">
                  -{{ item.product.old_price - item.product.price }}
              </span>
            </p>
            <h6>${{ item.product.price }}</h6>
            <button type="button"
                    class="btn btn-sm btn-danger mt-1"
                    @click="deleteFromCart(item.product.id)">Видалити</button>
          </li>
        </ul>
      </div>
      <p v-else>Ваш кошик порожній.</p>
    </div>
    <div id="cartOffcanvasBottom"
         class="position-absolute bottom-0 d-flex justify-content-center w-100 bg-light p-2 d-flex flex-column align-items-center"
         style="z-index: 5555;"
         v-if="cart.length">      
        <span class="d-inline-flex mb-1" data-bs-dismiss="offcanvas">
          <router-link class="btn btn-primary w-100 m-0" :to="'/order'">Оформити замовлення</router-link>
        </span>
      <router-link :to="'/cart'">
        <span data-bs-dismiss="offcanvas">Перейти до кошика</span>
      </router-link>
    </div>
  </div>
  <!-- ========================= OFFCANVAS END // ========================= -->
</template>

<script>
import router from './router/index.js'
import { mapState, mapActions } from "pinia";
import { useCartStore } from "./store/cart.js";
import { bodyPaddingTop } from './assets/js/body-padding-top.mjs';
import { cartOffcanvasPaddingBottom } from './assets/js/cart-offcanvas-padding-bottom.mjs';

export default {
  name: 'App',
  methods: {
    ...mapActions(useCartStore, ["deleteFromCart"])
  },
  computed: {
    ...mapState(useCartStore, ["cart"])
  },
  mounted() {
    bodyPaddingTop();
    cartOffcanvasPaddingBottom();
  }
}
</script>

<style scoped>
  #navbar {
    padding: 0px;
  }
  .header-main {
    padding-top: 1rem !important;
    padding-bottom: 0.5rem !important;
  }
</style>