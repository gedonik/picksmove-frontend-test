<template>
  <div class="product-list"> <!-- В данном случае, вместо div лучше использовать тег ul и li -->
    <div class="card" v-for="product in products" :style="{width: cardsWidth + '%'}"> <!-- Лучше добавить директиву :key там, где используется директива v-for,
     вместо :style лучше использовать медиа-запросы @media -->
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt=""> <!-- Не заполнен alt -->
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id"> <!-- id здесь не нужен -->
        <span>кг</span>
      </div>

      <button @click="addToCart(product)"> В корзину </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [], <!-- данный массив должен быть в store -->
    };
  },
  computed: {
    cardsWidth() { <!-- адаптив лучше делать через медиа-запросы @media -->
      let width = window.innerWidth;
      let count = 1;
      if (width > '840px') {
        count = 3;
      } else if ((width > '420px' && width < '840px')) {
        count = 2;
      }

      return 100 / count;
    },
  },
  methods: {
    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch('getProductsList'); <!-- Лучше сразу присваивать правую часть к this.products -->

      this.products = data;
    },
    addToCart(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
};
</script>

<style>
  .product-list {
    padding: 10px;
  }

  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
  }
  .card-image {
    width: 100%;
  }
  button {
    padding: 5px;
    margin: 5px;
  }
/*Лучше тегу button назначить класс и обращаться по классу*/
</style>
