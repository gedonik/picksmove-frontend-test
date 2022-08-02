<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ calcSum }} {{ currency }}</h3>
    <button :disabled="isCartEmpty" @click="clearCart">Очистить</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: 'Header',
  computed: {
    ...mapState(['cart', 'currency']),
    ...mapGetters(['calcSum']),
    isCartEmpty() {
     return this.cart.length === 0;
    }
  },
  methods: {
    ...mapMutations(['clearCart'])
  }
}
</script>

<style scoped>
.header {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e5e5e5;
}
</style>
