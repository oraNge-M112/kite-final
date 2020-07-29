import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    logged: false
  },
  mutations: {
    updateLoginStatus(state) {
      state.logged = true
    },
    updateLogoutStatus(state) {
      state.logged = false
    }
  },
  getters: {
    logged: state => state.logged
  }
})
