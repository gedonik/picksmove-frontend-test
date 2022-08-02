<template>
  <div class="app">
    <Header/>
    <CatalogList/>
    <CartList/>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue';
import CatalogList from './components/CatalogList.vue';
import CartList from './components/CartList.vue';

export default {
  name: 'App',
  components: { Header, CatalogList, CartList, },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
