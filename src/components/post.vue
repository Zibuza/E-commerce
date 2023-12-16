<template>
    <div class="post">
      <h2>{{ title }}</h2>
      <img :src="img" alt="" class="product-thumbnail">
      <slot></slot>
      <button class="solid-dark-button" @click="openInner(id)">View Product</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      img: String,
      id: Number,
    },
    methods: {
      openInner(id) {
        console.log(id);
        this.$router.push({ path: "Inner", query: { plan: id } });
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    color: rgb(0, 0, 0);
    margin-bottom: 20px;
    text-transform: capitalize;
  }
  

  
  .solid-dark-button {
    
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  

  .solid-dark-button{
    margin-top: 30px;
  }
  .solid-dark-button:hover {
    
    background-color: #444;
  }
  
.post{
  width: fit-content;
  padding: 20px 40px;
  height: 700px;
  background-color: rgba(112, 112, 209, 0.19);
  backdrop-filter: blur(10px);
  border-radius: 10px;
}
.post button{
  margin: 0;
  position: absolute;
  bottom: 20px;
}
  </style>
  