<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Фільтри
  </button>
  <div class="collapse mt-1" id="collapseExample">
    <div class="card card-body">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h6>Категорії</h6>
          <template v-for="(category, index) in filterList.categories">
              <input type="checkbox" class="btn-check"
                     :id="`category-check-${index + 1}`" autocomplete="off"
                     :value="category.id" v-model="filterVals.categories"/>
              <label class="btn btn-outline-primary m-1"
                     :for="`category-check-${index + 1}`">
                {{ category.title }}
              </label>
            </template>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <PriceSlider
            :listPrice="filterList.price"
            v-model="filterVals.price" />
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h6>Колір</h6>
          <template v-for="(color, index) in filterList.colors">
            <input type="checkbox" class="btn-check"
                   :id="`color-check-${index + 1}`" :value="color.id"
                   v-model="filterVals.colors" autocomplete="off" />
            <label class="btn color-filter-checkbox"
                   :style="`background-color: ${color.code}`"
                   :for="`color-check-${index + 1}`"></label>
          </template>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h6>Теги</h6>
          <div class="d-flex flex-wrap">
            <template v-for="(tag, index) in filterList.tags">
              <input type="checkbox" class="btn-check"
                     :id="`tag-check-${index + 1}`" autocomplete="off"
                     :value="tag.id" v-model="filterVals.tags" />
              <label class="btn btn-sm btn-outline-primary m-1"
                     :for="`tag-check-${index + 1}`">
                {{ tag.title }}
              </label>
            </template>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mt-md-0 mt-4"
              style="width: 10em;"
              type="button"
              @click="$emit('filter')">
        Filter
      </button>
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import PriceSlider from "./PriceSlider.vue";
export default {
  name: "Filter",
  components: {
    PriceSlider
  },
  emits: ["filter", "update:modelValue"],
  props: {
  	filterList: Object,
  	modelValue: Object,
  	loading: Boolean
  },
  data() {
    return {
      filterVals: JSON.parse(JSON.stringify(this.modelValue)),
    };
  },
  watch: {
    filterVals: {
      handler(value) {
        this.$emit("update:modelValue", value);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>