<template>
  <div id="app">
    <Header :cart="cart" :currency="currency"></Header><!-- Закрывающий тег лишний, учитывая что остальные компоненты без него -->
    <List :currency="currency"/><!-- Если используется store, передавать пропсы не нужно таким образом -->
    <Cart :cart="cart"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

export default {
  name: 'App',
  data() {
    return {
      cart: [],
      currency: 'VGTB',
    };
  },
  components: {
    Header, <!-- Перечень компонентов лучше писать в строчку -->
    List,
    Cart,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*Сброс стилей лучше писать в отдельном файле*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
/*Шрифты лучше подключать отдельно и использовать конкретный шрифт, а не список*/
</style>
