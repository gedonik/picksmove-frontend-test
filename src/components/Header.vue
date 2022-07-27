<script>
export default {
  name: 'Header',
  props: {
    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  data() {
    return {
      cartPrice: 0,
    };
  },
  watch: { <!-- В данном случае лучше использовать computed вместо watch, так как значение вычисляется -->
    cart(cart) {
      let val = 0; <!-- Избыточный код, ненужная переменная, можно сразу ссылаться на this.cartPrice -->
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
    },
  },
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template> <!-- Должен быть на верху страницы -->
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </div>
</template>
