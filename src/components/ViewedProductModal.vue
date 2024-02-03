<template>
  <div class="modal fade" id="productView" tabindex="-1"
       aria-labelledby="productViewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" data-bs-config={backdrop:true}>
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5"
              id="productViewLabel">
            {{ viewedProduct?.title }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="viewedProduct?.images?.length > 1"
               id="viewedProductImagesCarousel" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#viewedProductImagesCarousel" data-bs-slide-to="0"
                      class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#viewedProductImagesCarousel" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#viewedProductImagesCarousel" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div v-for="(productImage, index) in viewedProduct.images"
                   :class="'carousel-item' + (index == 0 ? ' active' : '')">
                <img :src="productImage.image_url" class="d-block w-100">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#viewedProductImagesCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#viewedProductImagesCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <img v-else-if="viewedProduct?.images?.length == 1"
               :src="viewedProduct.images[0].image_url" class="w-100">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center">
              {{ viewedProduct?.category?.title }}
            </li>
            <li class="list-group-item d-flex justify-content-between no-after-content">
              <span class="d-inline-flex">
                <s><p class="card-text me-3">{{ viewedProduct?.old_price }} ₴</p></s>
                <strong class="d-inline-flex">{{ viewedProduct?.price }} ₴</strong>
              </span>
              <p class="d-inline-flex">{{ viewedProduct?.count }} в наявності</p>
            </li>
            <li class="list-group-item d-flex justify-content-center">
              <span class="color"
                    v-for="color in viewedProduct.colors ?? []"
                    :style="'background-color: ' + color.code"></span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button v-if="findItemInCart(viewedProduct.id ?? 0) < 0"
                  class="btn btn-primary btn-lg"
                  title="Add to cart"
                  data-bs-dismiss="modal"
                  @click="addToCart(viewedProduct)">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
          <span v-else
                class="p-0" 
                data-bs-toggle="offcanvas"
                href="#cartOffcanvas"
                aria-controls="cartOffcanvas">
            <button class="btn btn-primary btn-lg"
                      title="View your cart"
                      data-bs-dismiss="modal">
              <i class="fa-solid fa-check"></i>
            </button>
          </span>
          <span data-bs-toggle="modal" data-bs-target="#productView">
            <router-link class="btn btn-primary btn-lg"
                         title="Learn more"
                         :to="learnMoreRoute">
              Детальніше
              <i class="fa-solid fa-angles-right"></i>
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "../store/cart.js";

export default {
  name: "ViewedProductModal",
  props: {
    viewedProduct: Object
  },
  data() {
    return {
      learnMoreRoute: {
        name: 'products.show',
        params: {
          'id': 1
        }
      },
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart', 'findItemInCart'])
  },
  watch: {
    viewedProduct: {
      handler(value) {
        if (value.id) {
          this.learnMoreRoute.params.id = value.id;
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>