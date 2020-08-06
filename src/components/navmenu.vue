<template>
	<div class="headerContainer">
		<div class="header">
			<ul class="navbar-links">
				<li class="title" @click="pushMap">
					<img
						v-if="this.$store.state.isHome"
						src="../assets/kitesurfing.svg"
					/>
					<img
						v-if="!this.$store.state.isHome"
						src="../assets/kitesurfing2.svg"
					/>
					<span
						:class="{
							color_blue: !this.$store.state.isHome,
							color_orange: this.$store.state.isHome,
						}"
						>Kite-Surfing</span
					>
				</li>
				<div class="pageInfo">
					<span class="loginInfo" v-if="!this.$store.state.logged && this.$store.state.isHome"
						>Please Log In to add and update markers to your
						account!</span
					>
					<span class="saveInfo" v-if="this.$store.state.logged"
						>Don't forget to update markers to not lose them!</span
					>
				</div>
				<li class="user smaller" @click="pushAccount">
					<svg style="width:40px;height:40px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							:class="{ classUserHome: this.$store.state.isHome == true }"
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
						/>
					</svg>
					<span v-if="this.$store.getters.logged" @click="logOut">Log Out</span>
					<span
						v-if="!this.$store.getters.logged"
						:class="{
							color_blue: !this.$store.state.isHome,
							color_orange: this.$store.state.isHome,
						}"
						>Log In</span
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {}
	},
	methods: {
		pushMap() {
			this.$router.push('/').catch((error) => {
				console.log(error)
			})
			this.$store.state.isHome = true
		},
		pushAccount() {
			if (this.$store.state.logged == false) {
				this.$router.push('/login').catch((error) => {
					console.log(error)
				})
				this.$store.state.isHome = false
			}
		},
		logOut() {
			this.$store.state.isHome = true
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
	display: inline-grid;
	grid-template-columns: 1fr 1.4fr 1fr;
	grid-template-rows: 1fr;
	justify-content: center;
	color: #ffb969;
	font-size: 1.5em;
	align-items: center;
	margin: 1em;
	padding: 0.2em 0;
	width: 95vw;
}

.pageInfo {
	font-size: 0.7em;
	display: flex;
	justify-content: center;
	align-items: center;
}

.loginInfo {
	z-index: 11;
	color: #d64933;
	display: flex;
	justify-content: center;
	align-items: center;
}

.saveInfo {
	position: relative;
	color: tomato;
}

.title,
.user {
	display: flex;
	align-items: center;
	cursor: pointer;
	margin: auto;

}

.classUserHome {
	fill: #ffb969;
}

.color_blue {
	color: #64b6ac;
}

.color_orange {
	color: #ffb969;
}
</style>
