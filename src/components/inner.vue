<template>
  <section>
    <div class="container flex">
      <div class="left">
        <div v-if="product">
          <img :src="src" v-for="src in product.images">

        </div>
        <div v-else>
          <p>404 Not Found</p>
        </div>
      </div>

      <div class="right">
        
        <div v-if="product">
          <h3>{{ product.title }}</h3>
          <h4>{{ product.price }}$</h4>
          <p>{{ product.description }}</p>
          <div class="color flex1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h5>Number</h5>
          <div class="add flex1">
            <span  @click="count--">-</span>
            <label>{{ count }}</label>
            <span @click="count++">+</span>
          </div>
          <p>total: {{ product.price * count}}$</p>

          <button class="add_cart" @click="add">Add to Bag</button>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Products from "../products.json";
import store from "../store";

export default {
  data() {
    return {
      product: null,
      count: 1,
    };
  },
  mounted() {
    this.Products
    this.product = Products.filter(
      (el) => el.id === parseInt(this.$route.query.plan)
    )[0];
  },
  watch: {
    count(count) {
      if (count <= 1) {
        this.count = 1;
      }
    },
  },
  methods: {
    add() {
      this.product["total"] = this.product.price * this.count;
      this.product["count"] = this.count;
      store.commit("addProduct", this.product);

      localStorage.setItem(
        "products",
        JSON.stringify(store.state.products)
      );
   
    }
  },
};
</script>




<style scoped>
.container {
  max-width: 75%;
  margin: 50px auto;
  width: 1200px;

  background: white;
  box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, 0.3);
}

.left,
.right {
  width: 50%;
  padding: 30px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.flex1 {
  display: flex;
}

.main_image {
  width: auto;
  height: auto;
}

.option img {
  width: 75px;
  height: 75px;
  padding: 10px;
}

.right {
  padding: 50px 100px 50px 50px;
}

h3 {
  color: #af827d;
  margin: 20px 0 20px 0;
  font-size: 25px;
}

h5,
p,
small {
  color: #837D7C;
}

h4 {
  color: red;
}

p {
  margin: 20px 0 50px 0;
  line-height: 25px;
}

h5 {
  font-size: 15px;
}

label,
.add span,
.color span {
  width: 25px;
  height: 25px;
  background: #000;
  border-radius: 50%;
  margin: 20px 10px 20px 0;
}

.color span:nth-child(2) {
  background: #EDEDED;
}

.color span:nth-child(3) {
  background: #D5D6D8;
}

.color span:nth-child(4) {
  background: #EFE0DE;
}

.color span:nth-child(5) {
  background: #AB8ED1;
}

.color span:nth-child(6) {
  background: #F04D44;
}


.add label,
.add span {
  background: none;
  border: 1px solid #C1908B;
  color: #C1908B;
  text-align: center;
  line-height: 25px;
}

.add label {
  padding: 10px 30px 0 20px;
  border-radius: 50px;
  line-height: 0;
}

.add span{
  cursor: pointer;
}
.add_cart {
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background: #C1908B;
  color: white;
  margin-top: 20%;
  border-radius: 30px;
}

@media only screen and (max-width:768px) {
  .container {
    max-width: 90%;
    margin: auto;
    height: auto;
  }

  .left,
  .right {
    width: 100%;
  }

  .container {
    flex-direction: column;
  }
}

@media only screen and (max-width:511px) {
  .container {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }

  .left,
  .right {
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .option {
    display: flex;
    flex-wrap: wrap;
  }
}

.container {
  height: 100%;
}

.left img {
  width: 70%;
  transition: 0.4s;
  border-radius: 10px;
  cursor: zoom-in;
}

.left img:hover {
  width: 100%;

}
</style>
