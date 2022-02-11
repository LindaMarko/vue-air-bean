import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [...menu],
    orders: [


      {
        orderNumber: "",
        orderDate: "",
        totalSum: ""


      }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
