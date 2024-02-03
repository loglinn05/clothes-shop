<template>
  <h6>Ціна</h6>
  <div class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <label for="minPrice" class="form-label m-0">Min:&nbsp;&nbsp;</label>
      <input type="number"
             class="form-control form-control-sm"
             id="minPrice"
             v-model="valsPrice.min"
             @input="ifMoreThanValMax"
             @blur="ifLesserThanListMin" >
    </div>
    <div class="d-flex align-items-center">
      <label for="maxPrice" class="form-label m-0">Max:&nbsp;&nbsp;</label>
      <input type="number"
             class="form-control form-control-sm"
             id="maxPrice"
             v-model="valsPrice.max"
             @input="ifMoreThanListMax"
             @blur="ifLesserThanValMin" >
    </div>
  </div>
  <MultiRangeSlider
    baseClassName="multi-range-slider"
    :min="listPrice.min"
    :max="listPrice.max"
    :minValue="valsPrice.min"
    :maxValue="valsPrice.max"
    :ruler="false"
    :rangeMargin="rangeMargin"
    @input="updatePrice"
  />
</template>

<script>
export default {
  name: 'PriceSlider',
  emits: ["update:modelValue"],
  props: {
    listPrice: Object,
    modelValue: Object,
  },
  data () {
    return {
      valsPrice: JSON.parse(JSON.stringify(this.modelValue)),
      rangeMargin: 100
    }
  },
  methods: {
    updatePrice(e) {
      this.valsPrice.min = e.minValue;
      this.valsPrice.max = e.maxValue;
    },
    ifLesserThanListMin(e) {
      var mp = e.target.value;
      if (mp < this.listPrice.min) {
        this.valsPrice.min = this.listPrice.min;
      }
    },
    ifMoreThanValMax(e) {
      var mp = e.target.value;
      if (mp > (this.valsPrice.max - this.rangeMargin)) {
        this.valsPrice.min = this.valsPrice.max - this.rangeMargin;
      }
    },
    ifMoreThanListMax(e) {
      var mp = e.target.value;
      if (mp > this.listPrice.max) {
        this.valsPrice.max = this.listPrice.max;
      }
    },
    ifLesserThanValMin(e) {
      var mp = e.target.value;
      if (mp < (this.valsPrice.min + this.rangeMargin)) {
        this.valsPrice.max = this.valsPrice.min + this.rangeMargin;
      }
    },
  },
  watch: {
    valsPrice: {
      handler(newVal, oldVal) {
        this.$emit("update:modelValue", newVal);
      },
      deep: true,
      immediate: true
    },
  }
}
</script>