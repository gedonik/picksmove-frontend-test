<template>
  <li class="catalog-item">
    <h2 class="catalog-item__title">{{ product.title }}</h2>
    <img
        class="catalog-item__image"
        :src="product.image"
        :alt="product.title"
    >
    <span class="catalog-item__price">
      Цена: {{ product.price }} {{ currency }}
    </span>

    <div>
      <label for="quantity"></label>
      <input
          class="catalog-item__input"
          v-model="quantity"
          type="number"
          name="quantity"
          id="quantity"
          min="0"
      >
      <span>кг</span>
    </div>

    <button
        :disabled="quantity <= 0"
        class="catalog-item__btn"
        @click="addProductToCart"
    >
      В корзину
    </button>
  </li>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    ...mapState([
      "currency"
    ]),
  },
  methods: {
    ...mapMutations(['addToCart']),
    addProductToCart() {
      this.addToCart({
        ...this.product,
        quantity: Number(this.quantity),
      })
      this.quantity = 0;
    },
  }
}
</script>

<style scoped>
.catalog-item {
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

.catalog-item__title {
  margin-bottom: 10px;
}

.catalog-item__image {
  object-fit: cover;
  margin-bottom: 10px;
}

.catalog-item__price {
  display: inline-block;
  margin-bottom: 10px;
}

.catalog-item__input {
  margin-right: 10px;
  text-align: center;
}

.catalog-item__btn {
  padding: 5px;
  margin: 5px;
}
</style>