<template>
  <li class="cart-item">
    {{ product.title }}: {{ product.price }} * {{ product.quantity }} =
    {{ (product.price * product.quantity).toFixed(2) }} {{ currency }}
    <button @click="delProductFromCart(product.id)">Удалить</button>
  </li>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState(['currency']),
    ...mapGetters(['calcSum'])
  },
  methods: {
    ...mapMutations(['delProductFromCart']),
  }
}
</script>

<style scoped>
.cart-item {
  margin-bottom: 10px;
}
</style>