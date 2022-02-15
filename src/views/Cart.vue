<template>
  <div class="cart">
    <dialog open>
      <router-link to="/meny" class="close-icon" @click="closeCart">
        <img
          src="../assets/graphics/close.svg"
          alt="Close this navigation"
          @click="closeCart"
        />
      </router-link>
      <h1>Din beställning</h1>
      <CartItem
        v-for="item in cartItems"
        :key="item.productId"
        :id="item.productId"
        :title="item.title"
        :quantity="item.qty"
        :price="item.price"
      />
      <div class="total">
        <span class="upper-part">
          <h2 class="title">Total</h2>
          <div class="dots"></div>
          <p class="total-price">{{ cartTotal }}kr</p>
        </span>
        <p>inkl moms + drönarleverans</p>
      </div>
      <router-link class="order-btn" to="/orderstatus"
        >Take my money!</router-link
      >
    </dialog>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue"
export default {
  components: { CartItem },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    cartIsClicked() {
      return this.$store.getters.isCartShown
    },
  },
  methods: {
    closeCart() {
      this.$store.dispatch("closeCart")
    },
  },
}
</script>

<style scoped>
dialog {
  display: flex;
  flex-direction: column;
  width: 310px;
  background: #ffffff;
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
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
}
h1 {
  text-align: center;
  margin: 0 0 3rem;
}
h2 {
  font-size: 1.3rem;
}
.dots {
  border-bottom: 1px black dotted;
  width: 150px;
  margin: 0 0.5rem;
}
.upper-part {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.menu-item {
  display: flex;
  flex-direction: column;
}
p {
  margin: 0;
  font-size: 0.8rem;
}
.total {
  margin-top: 4rem;
}
.total-price {
  font-family: "PT Serif", serif;
  font-size: 1.3rem;
  font-weight: 600;
}
.order-btn {
  font-family: "PT Serif", serif;
  font-size: 1.3rem;
  background-color: #2f2926;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  margin: 3rem auto;
  padding: 0.8rem 2rem;
  text-decoration: none;
}
</style>
