<script>
import Post from "../components/post.vue"
import store from "../store"
import Products from "../products.json"
export default {
  components: {
    Post
  },
  data() {
    return {
      products: Products,
      searchText: null
    }
  },
  computed:{
    filter_products(){
      if (this.searchText){
        return this.products.filter(product => product.title.toLowerCase().includes(this.searchText.toLowerCase()))
      }
      else{
        return this.products
      }
    }
  },
  mounted(){
    if (localStorage.getItem("products")){
      store.commit("replaceAll", JSON.parse(localStorage.getItem("products")))
    }
    console.log(store.state.products)
  }
}
</script>
<template>


    
  <section class="shop container">
    <h1>Shop Products</h1>
    <input type="search" placeholder="search product.." v-model="searchText">

    <div class="products">
      <Post v-for="(product, index) in filter_products" :key="index" :title="product.title" :id="product.id" >
        <img class="product-thumbnail" :src="product.thumbnail" alt="Product Thumbnail">
        <p class="product-title">{{ product.title }}</p>
        <p>{{ product.price }}$</p>
        <p>{{ product.description }}</p>
      </Post>
      
    </div>
  </section>
  

    
    
  
    
  
  </template>
  
  <style scoped>
  *{
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    scroll-padding-top: 2rem;
    scroll-behavior: smooth;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
  }

  :root{
    --main-color: #fd4646;
    --text-color: #171427;
    --bg-color: #fff;
  }
  


  body{
    color: #171427;
    
  }

  .container{
    max-width: 1068px;
    margin: auto;
    width: 100%;
  }

  
section{
  padding: 4rem 0 3rem;
}

section h1 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
 
}

.shop{
  margin-top: 2rem;
}

.products{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px, auto));
  gap: 13rem;
}

.price, .description  {
  font-weight: 500;
}

.product-title{
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

}

.product-thumbnail {
  width: 400px; 
  height: 300px; 
  object-fit: cover;
  margin-bottom: 0.5rem; 
  
}

  </style>
  