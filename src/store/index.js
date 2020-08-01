import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		logged: false,
		currentUser: {},
		currentUserId: '',
		markers: [],
	},
	mutations: {
		updateLoginStatus(state) {
			state.logged = true
		},
		updateLogoutStatus(state) {
			state.logged = false
		},
		setUser(state, user) {
			state.currentUser = user
			console.log(state.currentUser)
		},
		setMarkers(state, markers) {
			state.markers = markers
			// console.log(markers) logging current markers
		},
		setUserId(state, userId) {
			state.currentUserId = userId
		}
	},
	actions: {
		async addCurrentUser({ commit }, user) {
			commit('setUser', user)
		},
		async addCurrentMarkers({ commit }, markers) {
			commit('setMarkers', markers)
		},
		async setCurrentUserId({ commit }, userId) {
			commit('setUserId', userId)
		}
	},
	getters: {
		logged: (state) => state.logged,
		currentUser: (state) => state.currentUser,
		currentUserId: (state) => state.currentUserId,
		markers: (state) => state.markers,
	},
})