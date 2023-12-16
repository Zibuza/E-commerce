<template>
  <skin>
    <div class="small-container cart-page">
      <table>
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr v-for="(product, index) in getProducts" :key="index">
          <td>
            <div class="products">
              <div class="cart-info">
                <img :src="product.thumbnail" :alt="product.title" />
                <div>
                  <p>{{ product.title }}</p>
                  <small>Price: {{ product.price }}$</small>
                  <br>
                  <a @click="remove(product.id)">Remove</a>
                </div>
              </div>
            </div>
          </td>
          <td class="quantity">{{ product.count }}</td>
          <td>${{ product.count * product.price }}</td>
        </tr>
      </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Subtotal:</td>
            <td>${{ totalPrice }}</td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>${{ totalPrice }}</td>
          </tr>
        </table>
      </div>
    </div>

  </skin>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      cartProducts: [],
    };
  },
  computed: {
    getProducts() {
      return store.getters.get_products;
    },
    totalPrice() {
      return store.getters.get_total;
    },
  },
  created() {
    if (localStorage.getItem("products")) {
      store.commit("replaceAll", JSON.parse(localStorage.getItem("products")));
    }
  },
  methods: {
    remove(id) {
      store.commit("remove",id);
      localStorage.setItem("products", JSON.stringify(store.getters.get_products ))
    }
  }
}
</script>

<style scoped>
.cart-page {
  position: fixed;
  width: 100vw;
  margin: 80px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.cart-info {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
}


th {
  text-align: left;
  padding: 5px;
  color: #fff;
  background: #ff523b;
  font-weight: normal;
}

td {
  padding: 10px 5px;
}

.quantity {
  width: 40px;
  height: 30px;
  padding: 5px;
}

td a {
  color: #ff523b;
  font-size: 12px;
  cursor: pointer;
}

td img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.total-price {
  display: flex;
  justify-content: flex-end;

}

.total-price table {
  border-top: 3px solid #ff523b;
  width: 100%;
  max-width: 550px;
}

@media only screen and (max-width: 600px) {
  .cart-info p {
    display: none;
  }
}
</style>
