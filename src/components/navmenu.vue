<template>
	<div>
		<nav class="header">
			<ul>
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
					<span v-if="this.$store.getters.logged" @click="logOut">Log Out</span
					><span v-if="!this.$store.getters.logged">Log In</span>
				</li>
			</ul>
		</nav>
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
			this.$router.push('/map').catch((error) => {
				console.log(error)
			})
		},
		pushAccount() {
			if (this.$store.state.logged == false) {
				this.$router.push('/').catch((error) => {
					console.log(error)
				})
			}
		},
		logOut() {
			setTimeout(() => {
				this.$store.commit('updateLogoutStatus')
			}, 500)
		},
	},
}
</script>

<style>
.header {
	background-color: #303030;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	border-bottom: 2px solid orange;
}

.header ul {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	width: 95vw;
}

.header ul li {
	padding: 1rem 3rem;
	cursor: pointer;
	font-size: 2rem;
	color: #ffb969;
}

.title {
	line-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.header ul li:first-child {
	margin-right: auto;
}

.user {
	display: flex;
	justify-content: center;
	align-items: center;
}

.smaller {
	transform: scale(0.7);
}
</style>
