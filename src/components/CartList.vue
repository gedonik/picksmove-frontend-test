<template>
  <div class="container">
    <ul class="cart-list">
      <CartItem
          v-for="product in cartView"
          :key="product.id"
          :product="product"
      />
    </ul>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import {mapState} from "vuex";

export default {
  components: {CartItem},
  computed: {
    ...mapState([
      "cart"
    ]),
    cartView() {
      return this.cart.reverse();
    }
  },
};
</script>

<style scoped>

</style>
