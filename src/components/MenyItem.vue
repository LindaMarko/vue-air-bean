<template>
  <div class="menu-item">
    <span class="upper-part">
      <img 
      class="add-icon" 
      src="../assets/graphics/add.svg" 
      alt="Add button" 
      @click="addToCart" >
      <h2 class="title">{{title}}</h2>
      <div class="dots"></div>
      <h2 class="price">{{price}}</h2>
    </span>
    <span class="lower-part">
        <p>{{description}}</p>
    </span>              
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'price', 'description'],
  methods: {
    addToCart() {
        this.$store.dispatch('addToCart', this.id)
    }
  }
}
</script>

<style scoped>
.dots{
    border-bottom: 1px black dotted;
    width: 20px;
}


.add-icon{
    background-color: black;
    border-radius: 50%;
    height: 18px;
    padding: 7px;
    margin-right: 20px;   
    cursor: pointer;
}

.upper-part{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.lower-part{
    margin-left: 10%;
}

.menu-item{
    display: flex;
    flex-direction: column;
}
</style>