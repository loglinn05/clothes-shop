<template>
  <div class="row align-items-stretch position-relative gy-4">
    <div class="pageContentLoading" v-if="pageContentLoading"></div>
    <div class="col-xl-3 col-md-4 col-sm-6 col-12 d-inline-flex"
         v-for="(product, index) in products">
      <div class="card">
        <div v-if="product.images?.length > 1"
             :id="'productImagesCarousel' + (index + 1)"
             class="carousel slide">
          <div class="carousel-indicators">
            <button type="button"
                    v-for="(productImage, carouselIndex) in product.images"
                    :data-bs-target="'#productImagesCarousel' + (index + 1)"
                    :data-bs-slide-to="carouselIndex"
                    :class="carouselIndex == 0 ? 'active' : ''"
                    :aria-current="carouselIndex == 0 ? 'true' : 'false'"
                    :aria-label="'Slide ' + (carouselIndex + 1)"></button>
          </div>
          <div class="carousel-inner">
            <div v-for="(productImage, index) in product.images"
                 :class="'carousel-item' + (index == 0 ? ' active' : '')">
              <img :src="productImage.image_url"
                   class="d-block card-img-top">
            </div>
          </div>
          <button class="carousel-control-prev" type="button"
                  :data-bs-target="'#productImagesCarousel' + (index + 1)"
                  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button"
                  :data-bs-target="'#productImagesCarousel' + (index + 1)"
                  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <img v-else-if="product.images?.length == 1" :src="product.images[0].image_url" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">{{ product.title }}</h5>
          <div class="d-flex justify-content-center">
            <s><p class="card-text me-3">{{ product.old_price }} ₴</p></s>
            <p class="card-text">{{ product.price }} ₴</p>
          </div>
        </div>
        <hr class="m-0" />
        <div class="card-body text-center">
          <p class="card-text">{{ product.category.title }}</p>
        </div>
        <hr class="m-0" />
        <div class="card-body text-center">
          <button class="btn btn-info btn-lg me-1" title="View product"
             data-bs-toggle="modal" data-bs-target="#productView"
             @click="$emit('setViewedProduct', product)">
            <i class="fa-solid fa-eye"></i>
          </button>
          <a href="#" class="btn btn-danger btn-lg me-1" title="Add to wishlist">
            <i class="fa-solid fa-heart"></i>
          </a>
          <button v-if="findItemInCart(product.id) < 0"
                  class="btn btn-warning btn-lg"
                  title="Add to cart"
                  @click="addToCart(product)">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
          <span v-else
                data-bs-toggle="offcanvas"
                href="#cartOffcanvas"
                aria-controls="cartOffcanvas">
            <button class="btn btn-warning btn-lg"
                    title="View your cart">
              <i class="fa-solid fa-check"></i>
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="products-pagination d-flex justify-content-center mt-4">
    <vue-awesome-paginate
      :total-items="totalItems"
      :items-per-page="itemsPerPage"
      :max-pages-shown="maxPagesShown"
      :show-ending-buttons="ifDesktop"
      :first-page-content="'<<'"
      :last-page-content="'>>'"
      v-model="currentPage"
      :on-click="paginate"
    />
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "../store/cart.js";

export default {
  name: "ProductList",
  emits: ['setViewedProduct', 'paginate'],
  props: {
    products: Array,
    paginationData: Object
  },
  data() {
    return {
      maxPagesShown: (window.screen.width >= 375) ? 3 : 1,
      currentPage: 1,
      pageContentLoading: false,
      ifDesktop: window.screen.width >= 768
    }
  },
  methods: {
    paginate(page) {
      this.pageContentLoading = true;
      this.$emit("paginate", this.currentPage);
    },
    ...mapActions(useCartStore, ['addToCart', 'findItemInCart'])
  },
  computed: {
    totalItems() {
      return this.paginationData.last_page * this.paginationData.per_page;
    },
    itemsPerPage() {
      return this.paginationData.per_page;
    },
  },
  watch: {
    products: {
      handler() {
        this.pageContentLoading = false;
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
.pageContentLoading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999;
}
</style>