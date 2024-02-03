<template>
  <fade-transition>
    <section class="container my-4 my-lg-5"
             v-if="products.length && Object.keys(filterList).length">
      <div class="mb-4">
        <Filter :filterList="filterList"
                v-model="filterValues"
                @filter="getProducts" />
      </div>
      <ProductList :products="products"
                   :paginationData="paginationData"
                   @setViewedProduct="setViewedProduct"
                   @paginate="getProducts" />
    </section>
    <section id="loading-container"
             class="d-flex justify-content-center align-items-center"
             v-else-if="(!products.length || !Object.keys(filterList).length) && loading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>
    <section id="product-loading-failed"
             class="container py-4 py-lg-5 vh-50"
             v-else>
      <h6>Виникла помилка при завантаженні даних. Зверніться за адресою support@clothes-shop.com.</h6>
    </section>
  </fade-transition>
  <ViewedProductModal :viewedProduct="viewedProduct" />
</template>

<script>
import ProductList from '../../components/ProductList.vue';
import Filter from '../../components/Filter.vue';
import ViewedProductModal from '../../components/ViewedProductModal.vue';
import { containerSizing } from '../../assets/js/container-sizing.mjs';

export default {
  name: "ProductCatalogue",
  components: {
    ProductList,
    Filter,
    ViewedProductModal
  },
  data() {
    return {
      products: [],
      paginationData: {},
      filterList: {},
      viewedProduct: {},
      filterValues: {
        price: {
          min: 0,
          max: 0
        },
        categories: [],
        tags: [],
        colors: []
      },
      loading: false
    }
  },
  methods: {
    getProducts(page = 1) {
      this.axios.post('http://localhost:8000/api/products', {
        ...this.filterValues,
        'page': page
      })
      .then(res => {
        console.log(res);
        this.products = res.data.data;
        this.paginationData = res.data.meta;
      })
      .finally(() => {
        this.loading = false;
      });
    },
    getFilterList() {
      this.loading = true;
      this.axios.get('http://localhost:8000/api/products/filterList')
      .then(res => {
        this.filterList = Object.assign(this.filterList, res.data);
        this.filterValues.price.min = this.filterList.price.min;
        this.filterValues.price.max = this.filterList.price.max;
        this.getProducts();
      })
      .catch(err => {
        this.loading = false;
      });
    },
    setViewedProduct(product) {
      this.viewedProduct = product;
    }
  },
  beforeMount() {
    this.loading = true;
  },
  mounted() {
    containerSizing();
    this.getFilterList();
  }
}
</script>