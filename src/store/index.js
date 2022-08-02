import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        currency: 'VGTB',
    },
    getters: {
        calcSum: (state) => {
            const summary = state.cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
            return summary.toFixed(2);
        }
    },
    mutations: {
        setProducts: (state, products) => {
            state.products = products;
        },
        addToCart: (state, newProduct) => {
            const existCartProduct = state.cart.findIndex(product => product.id === newProduct.id);

            if (existCartProduct >= 0) {
                const [existProductId] = state.cart.filter(product => product.id === newProduct.id);

                existProductId.quantity = existProductId.quantity + newProduct.quantity;
            } else {
                state.cart.push(newProduct);
            }
        },
        delProductFromCart: (state, productId) => {
            state.cart = state.cart.filter(product => product.id !== productId);
        },
        clearCart: (state) => {
            state.cart = [];
        }
    },
    actions: {
        async fetchProducts({commit}) {
            const response = await api.getProductsList();
            commit('setProducts', response);
        },
    },
})
