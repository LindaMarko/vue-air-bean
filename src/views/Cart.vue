<template>
<div class="cart">
  <dialog open>
    <router-link to="/meny" class="close-icon" @click="closeCart">
      <img 
      src="../assets/graphics/close.svg" 
      alt="Close this navigation"
      @click="closeCart" >
    </router-link>
    <h1>Din beställning</h1>
    <CartItem
      v-for="item in cartItems"
      :key="item.productId"
      :id="item.productId"
      :title="item.title"
      :quantity="item.qty"
      :price="item.price"/>
    <div class="total">
      <span class="upper-part">
        <h2 class="title">Total</h2>
        <div class="dots"></div>
        <p>{{cartTotal}}kr</p>
      </span>
      <span class="lower-part">
        <p>inkl moms + drönarleverans</p>
      </span>
    </div>
    <router-link class="order-btn" to="/orderstatus">Take my money!</router-link>
  </dialog>
</div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
export default {
  components: {CartItem},
  computed: {
    cartItems() {
        return this.$store.getters.cartItems
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    cartIsClicked() {
      return this.$store.getters.isCartShown;
    },
  },
  methods: {
    closeCart() {
      this.$store.dispatch('closeCart')
    }
  },

}
</script>

<style scoped>
dialog {
  display: flex;
  flex-direction: column;
  width: 310px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  padding: 1rem;
}
.close-icon {
  align-self: flex-end;
  width: 20px;
  height: 20px;
  background-color: white;
  padding: .8rem;
  border-radius: 50%;
  cursor: pointer;
}
h1 {
  text-align: center;
  margin-top: 0;
}
h2 {
  font-size: 1.3rem;
}
.dots{
    border-bottom: 1px black dotted;
    width: 150px;
    margin: 0 .5rem;
}
.upper-part{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.lower-part{
    margin-left: 3%;
}

.menu-item{
    display: flex;
    flex-direction: column;
}
p {
  margin: 0;
  font-size: .8rem;
}
.total {
  margin-top: 5rem;
}

.order-btn {
  font-family: 'PT Serif', serif;
  font-size: 1.3rem;
  background-color: #2F2926;
  color:#fff ;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  margin: 3rem auto;
  padding: .8rem 2rem;
  text-decoration: none;
}
</style>