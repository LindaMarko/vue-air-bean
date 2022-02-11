import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [...menu],
    orders: [
      {
        orderNumber: "#AB1123282323Z",
        orderDate: "20/03/06",
        totalSum: 443
      },
      {
        orderNumber: "#AB1128382323X",
        orderDate: "20/03/03",
        totalSum: 333
      },
      {
        orderNumber: "#AB1444482323X",
        orderDate: "20/02/21",
        totalSum: 893
      }
    ],
    users: [
      {
        name: "Sixten Kaffelövér",
        epost: "sixten.kaffelover@zocom.se"
      }
    ]


  },
  mutations: {

    addUser(state, user) {
      state.users.unshift(user)
    }
  },
  actions: {
  },
  modules: {
  }
})
