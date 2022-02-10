import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [...menu],

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
