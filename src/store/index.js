import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		logged: false,
		currentUser: {},
		currentUserId: '',
		markers: [],
		keyForMap: 1,
		logStatus: 'login'
	},
	mutations: {
		updateLoginStatus(state) {
			state.logged = true
		},
		updateLogoutStatus(state) {
			state.logged = false
		},
		updateLogStatus(state, status) {
			state.logStatus = status
		},
		setUser(state, user) {
			state.currentUser = user
		},
		setMarkers(state, markers) {
			state.markers = markers
			// console.log(markers) logging current markers
		},
		setUserId(state, userId) {
			state.currentUserId = userId
		},
		refreshMap(state) {
			state.keyForMap ++
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
		},
		async refreshMap({ commit }) {
			commit('refreshMap')
		},
		async setLoginStatus({ commit }) {
			commit('updateLogStatus', 'login')
		},
		async setSignUpStatus({ commit }) {
			commit('updateLogStatus', 'signup')
		}
	},
	getters: {
		logged: (state) => state.logged,
		currentUser: (state) => state.currentUser,
		currentUserId: (state) => state.currentUserId,
		markers: (state) => state.markers,
		refreshMap: (state) => state.refreshMap
	},
})
