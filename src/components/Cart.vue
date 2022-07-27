<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera"> <!-- Лучше добавить директиву :key там, где используется директива v-for -->
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
      spisok_dlya_rendera() { <!-- Не корректное название функции, только английские слова, в данном случае, например renderList -->
          return this.cart.reverse();
      },
  },
};
</script>

<style>

</style>
