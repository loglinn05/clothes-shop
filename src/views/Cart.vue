<template>
  <section class="container py-4 py-lg-5" v-if="cart.length">
    <div class="row">
      <div class="col-12">
        <ul class="list-group list-group-flush w-100 px-0">
          <li class="list-group-item row d-flex align-items-center" v-for="item in cart">
            <img class="cart-item-image col-xl-1 col-lg-2 col-md-3 col-4" :src="item.product.images[0].image_url">
            <p class="mb-0 col-xl-3 col-lg-4 col-md-9 col-8">{{ item.product.title }}</p>
            <div class="col-md-3 col-4 d-lg-none d-inline-flex"></div>
            <h5 class="col-xl-2 col-lg-3 col-sm-4 col-8 d-flex justify-content-start mb-0 mt-lg-0 mt-3">{{ item.product.price }} ₴
              <small>/шт.</small>
            </h5>
            <div class="col-4 d-sm-none d-inline-flex"></div>
            <div class="col-xl-2 col-lg-3 col-md-5 col-sm-4 col-8 d-flex justify-content-xl-center justify-content-lg-start justify-content-md-end justify-content-start mt-lg-0 mt-3">
              <div class="input-group" style="width: 10em;">
                <button class="btn btn-outline-warning"
                        type="button"
                        @click="changeQty(item.product.id, 'dec')">-</button>
                <input type="number" class="form-control warning"
                       v-model="item.qty"
                       @blur="validateQty(item.product.id)">
                <button class="btn btn-outline-warning"
                        type="button"
                        @click="changeQty(item.product.id)">+</button>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-4 d-xl-none d-inline-flex"></div>
            <div class="col-lg-1 col-3 d-flex justify-content-xl-center justify-content-start mt-xl-0 mt-3">
              <button type="button"
                      class="btn btn-primary"
                      @click="deleteFromCart(item.product.id)">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div class="col-lg-1 col-3 d-flex justify-content-xl-center justify-content-start mt-xl-0 mt-3">
              <button type="button"
                      class="btn btn-danger"
                      @click="deleteFromCart(item.product.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            <div class="col-4 d-md-none d-inline-flex"></div>
            <div class="col-xl-2 col-md-3 col-8 d-flex justify-content-start justify-content-md-end mt-xl-0 mt-3">
              <h5>{{ item.product.price * item.qty }} ₴</h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <h3 class="text-center">Всього - {{ total }} ₴</h3>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 d-flex justify-content-center">
        <router-link class="btn btn-lg btn-primary mb-1" to="/order">Оформити замовлення</router-link>
      </div>
    </div>
  </section>
  <div class="container py-4 py-lg-5 vh-50" v-else>
    <h4>Ваш кошик порожній.</h4>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../store/cart.js";
import { containerSizing } from '../assets/js/container-sizing.mjs';

export default {
  name: 'Cart',
  methods: {
    ...mapActions(useCartStore, ["deleteFromCart", "changeQty", "validateQty"])
  },
  computed: {
    ...mapState(useCartStore, ["cart", "total"])
  }
}
</script>