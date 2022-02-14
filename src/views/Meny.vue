<template>
  <div class="meny">
    <header>
      <router-link to="/navigation">
        <NavIcon />
      </router-link>
      <div class="cart-icon" @click="isClicked">
        <img src="../assets/graphics/bag.svg" alt="Cart" />
        <div v-if="cartQuantity" class="qty">
          <p>{{ cartQuantity }}</p>
        </div>
      </div>
    </header>
    <Cart v-if="cartIsClicked" />
    <main>
      <h1>Meny</h1>
      <MenyItem
        v-for="menuItem in menu"
        :key="menuItem.id"
        :id="menuItem.id"
        :title="menuItem.title"
        :price="menuItem.price"
        :description="menuItem.desc"
      />
    </main>
    <footer></footer>
  </div>
</template>

<script>
import MenyItem from "../components/MenyItem.vue"
import Cart from "./Cart.vue"
import NavIcon from "../components/NavIcon.vue"
export default {
  components: {
    MenyItem,
    Cart,
    NavIcon,
  },
  computed: {
    menu() {
      return this.$store.getters.products
    },
    cartQuantity() {
      return this.$store.getters.cartQty
    },
    cartIsClicked() {
      return this.$store.getters.isCartShown
    },
  },
  methods: {
    isClicked() {
      this.$store.dispatch("showCart")
    },
  },
}
</script>

<style scoped>
.meny {
  background-color: #f3e4e1;
  width: 375px;
}
h1 {
  text-align: center;
}
header {
  display: flex;
  justify-content: space-between;
  height: 113px;
  background-image: url(../assets/graphics/graphics-header.svg);
  background-repeat: no-repeat;
  padding: 0.8rem;
}
p {
  margin: 0;
}
.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: white;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
}
.cart-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  background-color: #2f2926;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
}
.qty {
  width: 8px;
  height: 8px;
  padding: 0.4rem;
  background-color: #e5674e;
  color: #fff;
  margin-top: -2.5rem;
  margin-right: -1.3rem;
  border-radius: 50%;
}
.qty p {
  font-size: 0.8rem;
  margin-top: -0.3rem;
}
footer {
  height: 73px;
  background-image: url(../assets/graphics/graphics-footer.svg);
  background-repeat: no-repeat;
}
</style>
