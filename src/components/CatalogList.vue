<template>
  <div class="container">
    <ul class="catalog-list">
      <CatalogItem
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </ul>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
import {mapState, mapActions} from "vuex";

export default {
  name: 'CatalogList',
  components: {CatalogItem},
  data() {
    return {
      timer: null,
    }
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.startPricesMonitoring();
  },
  beforeDestroy() {
    this.stopPricesMonitoring();
  },
  methods: {
    ...mapActions(['fetchProducts']),
    startPricesMonitoring() {
     this.timer = setInterval(this.fetchProducts, 2000);
    },
    stopPricesMonitoring() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
};
</script>

<style>
.catalog-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 840px) {
  .catalog-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 420px) {
  .catalog-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
