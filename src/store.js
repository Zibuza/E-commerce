import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    addProduct(state, product) {
      const exists = state.products.find((p) => p.id === product.id);
      if (exists) {
        exists.count += product.count;
        exists.total = exists.count * exists.price;
      } else {
        state.products.push(product);
      }
    },

    replaceAll(state, products) {
      state.products = products;
    },
    remove(state, id){
      state.products = state.products.filter(el => el.id != id)
    }
  },
  getters: {
    get_products: (state) => {
      return state.products;
    },

    
    get_total: (state) => {
      return state.products.reduce((total, product) => {
        return total + product.count * product.price;
      }, 0);
    },

    
    get_quantity_for_product: (state) => (productId) => {
      const product = state.products.find((p) => p.id === productId);
      return product ? product.count : 0;
    },



  },
});
