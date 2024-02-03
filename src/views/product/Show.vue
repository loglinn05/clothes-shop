<template>
  <fade-transition>
    <section class="container my-4 my-lg-5" v-if="product.id">
      <h1 class="mb-4 text-sm-start text-center">{{ product.title }}</h1>
      <div class="row">
        <div class="col-lg-6 col-md-7 col-12 px-md-auto px-0 d-flex justify-content-sm-start justify-content-center">
          <div id="productImagesCarousel"
               class="carousel slide"
               v-if="product.images?.length > 1">
            <div class="carousel-indicators">
              <button type="button"
                      v-for="(productImage, carouselIndex) in product.images"
                      data-bs-target="#productImagesCarousel"
                      :data-bs-slide-to="carouselIndex"
                      :class="carouselIndex == 0 ? 'active' : ''"
                      :aria-current="carouselIndex == 0 ? 'true' : 'false'"
                      :aria-label="'Slide ' + (carouselIndex + 1)"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(productImage, index) in product.images"
                   :class="'carousel-item' + (index == 0 ? ' active' : '')">
                <img :src="productImage.image_url"
                     class="d-block w-100">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#productImagesCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#productImagesCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <img v-else-if="product.images?.length == 1"
               :src="product.images[0].image_url"
               id="productImage"
               class="d-block w-100">
        </div>
        <div class="col-lg-6 col-md-5 col-12 pt-md-0 pt-3 text-sm-start text-center">
          <div class="w-100 mb-3">
            <h6 class="text-secondary">Категорія: {{ product.category.title }}</h6>
          </div>
          <div class="w-100 mb-3">
            <h6>
              <s class="me-3">{{ product.old_price }} ₴</s>
              <span class="badge bg-primary"
                    v-if="product.old_price">
                  -{{ product.old_price - product.price }}
              </span>
            </h6>
            <h3>{{ product.price }} ₴</h3>
          </div>
          <div class="w-100 mb-3">
            <span class="product-page-color"
                  v-for="color in product.colors"
                  :style="'background-color: ' + color.code"></span>
          </div>
          <div class="w-100 mb-3">
            <h5 class="text-secondary">{{ product.count }} в наявності</h5>
          </div>
          <div class="w-100 mb-3">
            <p class="text-secondary"><span class="me-2">Теги:</span>
              <span class="badge bg-secondary me-1"
                    v-for="tag in product.tags">
                {{ tag.title }}
              </span>
            </p>
          </div>
          <div class="w-100 mb-3">
            <button class="btn btn-outline-primary btn-lg w-lg-50 w-75 me-3"
                    @click="addToCart(product)"
                    :data-bs-toggle="'offcanvas'"
                    :href="cartItemFound ? '#cartOffcanvas' : null"
                    :aria-controls="cartItemFound ? 'cartOffcanvas' : null">
              Купити&nbsp;
              <i class="fa-solid fa-cart-shopping" v-if="cartItemDoesNotExist"></i>
              <i class="fa-solid fa-check" v-else></i>
            </button>
            <button class="btn btn-outline-danger btn-lg">
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          {{ product.description }}
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          {{ product.content }}
        </div>
      </div>
    </section>
    <section id="loading-container"
             class="d-flex justify-content-center align-items-center"
             v-else-if="!product.id && loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>
    <section id="product-data-loading-failed"
             class="container py-4 py-lg-5 vh-50"
             v-else>
      <h6>Виникла помилка при завантаженні даних. Зверніться за адресою support@clothes-shop.com.</h6>
    </section>
  </fade-transition>
</template>

<script>
import { mapActions } from "pinia";
import { containerSizing } from '../../assets/js/container-sizing.mjs';
import { useCartStore } from "../../store/cart.js";

export default {
  name: 'ProductPage',
  data () {
    return {
      id: this.$route.params.id,
      loading: false,
      product: {}
    }
  },
  methods: {
    getProduct() {
      this.loading = true;
      this.axios.post(`http://localhost:8000/api/products/${this.id}`)
      .then(res => {
        this.product = res.data.data;
      })
      .finally(() => {
        this.loading = false;
      });
    },
    ...mapActions(useCartStore, ['addToCart', 'findItemInCart'])
  },
  computed: {
    cartItemFound() {
      return this.findItemInCart(this.product.id) >= 0;
    },
    cartItemDoesNotExist() {
      this.findItemInCart(this.product.id) < 0;
    }
  },
  beforeMount() {
    this.loading = true;
  },
  mounted() {
    containerSizing();
    containerSizing("product-data-loading-failed");
    this.getProduct();
  }
}
</script>

<style scoped>
  #productImagesCarousel , #productImage {
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    #productImagesCarousel , #productImage {
      width: 90%;
    }
  }
</style>