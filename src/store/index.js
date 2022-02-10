import Vue from 'vue'
import Vuex from 'vuex'
import MenuList from '@/assets/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: MenuList
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
