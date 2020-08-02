<template>
	<div class="headerContainer">
		<div class="header">
			<ul class="navbar-links">
				<li class="title" @click="pushMap">
					<img src="../assets/kitesurfing.svg" />
					<span>Kite-Surfing</span>
				</li>

				<!-- Maybe adding a button on the map page which add/deletes all markers -->
				<!-- <li class="addMarker smaller" @click="isDisplayed = !isDisplayed">
					New Marker
				</li> -->
				<li class="user smaller" @click="pushAccount">
					<svg style="width:40px;height:40px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
						/>
					</svg>
						<span v-if="this.$store.getters.logged" @click="logOut"
							>Log Out</span>
						<span v-if="!this.$store.getters.logged">Log In</span>
				</li>
			</ul>
		</div>
		<addnew v-if="isDisplayed"></addnew>
	</div>
</template>

<script>
import addnew from './addnew'

export default {
	components: {
		addnew,
	},
	data() {
		return {
			isDisplayed: false,
		}
	},
	methods: {
		pushMap() {
			this.$router.push('/').catch((error) => {
				console.log(error)
			})
		},
		pushAccount() {
			if (this.$store.state.logged == false) {
				this.$router.push('/login').catch((error) => {
					console.log(error)
				})
			}
		},
		logOut() {
			setTimeout(() => {
				this.$store.commit('updateLogoutStatus')
				localStorage.removeItem('userId')
				localStorage.removeItem('markers')
				this.$store.commit('refreshMap')
			}, 500)
		},
	},
}
</script>

<style>

.headerContainer {
	width: 100vw;
	background-color: #303030;
	position: absolute;
	left: 0;
	top: 0;
}

.navbar-links {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #FFB969;
	font-size: 1.5em;
}

.title, .user {
	display: flex;
	align-items: center;
	cursor: pointer;
}

.title {
	margin-right: auto;
	margin-left: 2em;
}

.user {
	margin-right: 5em;
}

</style>
