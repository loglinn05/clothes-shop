import { defineStore } from 'pinia'
import { isNumeric } from "../assets/js/helpers.mjs";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(product) {
      if (this.findItemInCart(product.id) < 0) {
        this.cart.push({
          "product": product,
          "qty": 1
        });
      }
    },
    deleteFromCart(itemId) {
      this.cart.splice(
        this.findItemInCart(itemId), 1
      );
    },
    findItemInCart(id) {
      return this.cart.findIndex(
        (item) => item.product.id == id
      );
    },
    changeQty(id, op = "inc") {
      if (op == "inc") {
        this.cart[this.findItemInCart(id)].qty += 1
      } else if (op == "dec") {
        if (this.cart[this.findItemInCart(id)].qty > 1)
          this.cart[this.findItemInCart(id)].qty -= 1
      } else {
        throw new Error(`Invalid operator: expected "inc" or "dec", found "${op}".`);
      }
    },
    validateQty(id) {
      let qty = this.cart[this.findItemInCart(id)].qty;
      if (
        !isNumeric(qty) ||
        !Number.isInteger(qty) ||
        qty <= 0
      ) {
        this.cart[this.findItemInCart(id)].qty = 1;
      }
    }
  },
  getters: {
    total(state) {
      var initialTotal = 0;
      const total = state.cart.reduce(
        (acc, curVal) => {
          return acc + (curVal.product.price * curVal.qty);
        }, initialTotal
      );
      return total;
    }
  },
  persist: true,
})