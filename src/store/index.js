import Vue from "vue"
import Vuex from "vuex"
import menu from "@/assets/data/menu.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [...menu],
    cart: {
      items: [],
      total: 0,
      quantity: 0,
    },
    cartIsClicked: false,
    orders: [
      {
        orderNumber: "#AB1123282323Z",
        orderDate: "20/03/06",
        totalSum: 443,
      },
      {
        orderNumber: "#AB1128382323X",
        orderDate: "20/03/03",
        totalSum: 333,
      },
      {
        orderNumber: "#AB1444482323X",
        orderDate: "20/02/21",
        totalSum: 893,
      },
    ],
    users: [
      {
        name: "Sixten Kaffelövér",
        epost: "sixten.kaffelover@zocom.se",
      },
    ],
  },
  mutations: {
    addUser(state, user) {
      state.users.unshift(user)
    },
    showCart(state) {
      state.cartIsClicked = true
    },
    closeCart(state) {
      state.cartIsClicked = false
    },
    addProductToCart(state, payload) {
      const productData = payload
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === productData.id
      )

      if (productInCartIndex < 0) {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          price: productData.price,
          qty: 1,
        }
        state.cart.items.push(newItem)
      } else {
        state.cart.items[productInCartIndex].qty++
      }
      state.cart.quantity++
      state.cart.total += productData.price
    },
    increaseItemQty(state, payload) {
      const cartItem = payload
      cartItem.qty++
      state.cart.quantity++
      state.cart.total += cartItem.price
    },
    decreaseItemQty(state, payload) {
      const cartItem = payload
      cartItem.qty--
      state.cart.quantity--
      state.cart.total -= cartItem.price
      if (cartItem.qty === 0) {
        const index = state.cart.items.indexOf(cartItem)
        state.cart.items.splice(index, 1)
      }
    },
  },
  actions: {
    showCart(context) {
      context.commit("showCart")
    },
    closeCart(context) {
      context.commit("closeCart")
    },
    addToCart(context, payload) {
      const prodId = payload
      const products = context.getters["products"]
      const product = products.find((prod) => prod.id === prodId)
      context.commit("addProductToCart", product)
    },
    increaseQty(context, payload) {
      const prodId = payload
      const cartItems = context.getters["cartItems"]
      const item = cartItems.find((item) => item.productId === prodId)
      context.commit("increaseItemQty", item)
    },
    decreaseQty(context, payload) {
      const prodId = payload
      const cartItems = context.getters["cartItems"]
      const item = cartItems.find((item) => item.productId === prodId)
      context.commit("decreaseItemQty", item)
    },
  },
  getters: {
    products(state) {
      return state.menu
    },
    cartItems(state) {
      return state.cart.items
    },
    cartQty(state) {
      return state.cart.quantity
    },
    cartTotal(state) {
      return state.cart.total
    },
    isCartShown(state) {
      return state.cartIsClicked
    },
  },
})
