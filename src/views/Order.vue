<template>
  <section class="container my-4 my-lg-5">
    <h1 class="mb-3 mb-lg-4">Оформити замовлення</h1>
    <div class="row gx-5 bg-primary-subtle">
      <div class="col-6">
        <form>
          <div class="mb-3">
            <label for="tel" class="form-label">Телефон</label>
            <input type="tel" class="form-control" id="tel"
                   placeholder="+38 (096) 123 4567" pattern="^\+38\s\(0\d{2}\)\sd{3}\sd{4}$">
          </div>
          <div class="mb-3">
            <label for="surname" class="form-label">Прізвище</label>
            <input type="text" class="form-control" id="surname" placeholder="Архипова">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Ім'я</label>
            <input type="text" class="form-control" id="name" placeholder="Дарія">
          </div>
          <div class="mb-3">
            <label for="patronymic" class="form-label">По батькові</label>
            <input type="text" class="form-control" id="patronymic" placeholder="Михайлівна">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="email" placeholder="daria@example.com">
          </div>
        </form>
      </div>
      <div class="col-6">
        <h6 class="mb-3">Якщо ви постійний клієнт, авторизуйтесь за допомогою кнопки і ми автоматично заповнимо ваші дані і збережемо всю інформацію по замовленню і контактні дані.</h6>
        <a href="#!" class="btn btn-primary btn-lg">Зареєструватися</a>
      </div>
    </div>
    <div class="row gx-5 mt-4 mt-lg-5">
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
        <div class="d-flex align-items-center w-100 my-3">
          <h5 class="m-0">Виберіть місто доставки:&nbsp;</h5>
          <div class="w-11em">
            <v-select :options="deliveryCities"
                      v-model="orderData.deliveryCity"
                      @change="setDeliveryCity"
                      :clearable="false"></v-select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Inputmask from "inputmask";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../store/cart.js";

export default {
  name: 'Order',
  data () {
    return {
      deliveryCities: [
        "Запоріжжя", "Дніпро", "Київ", "Харків", "Одеса"
      ],
      orderData: {
        deliveryCity: "Запоріжжя"
      }
    };
  },
  methods: {
    maskTel() {
      var selector = document.getElementById("tel");
      Inputmask("+38 (099) 999 9999").mask(selector);
    },
    setDeliveryCity(value) {
      this.orderData.deliveryCity = value;
    },
    ...mapActions(useCartStore, ["deleteFromCart", "changeQty", "validateQty"])
  },
  computed: {
    ...mapState(useCartStore, ["cart", "total"])
  },
  mounted() {
    this.maskTel();
  }
}
</script>