<template>
	<div class="form">
		<form class="login-form" method="POST">
			<h1>Log In</h1>
			<input
				type="text"
				name="username"
				id="username"
				autocomplete="off"
				required
				@input="checkInput"
				v-model="username"
			/>
			<label for="username">Username:</label>
			<img src="../assets/user.svg" id="userIcon" />
			<input
				type="password"
				name="password"
				id="password"
				required
				@input="checkInput"
				v-model="password"
			/>
			<label for="password">Password:</label>
			<img src="../assets/password.svg" id="passIcon"/>
			<button @click="submitLogin" class="submitButton">
				<span>Log In</span>
			</button>
			<span v-if="userNotFound" class="notFound">Wrong credentials!</span>
		</form>
		<p>
			You don't have an account? <br /><span id="createAcc" @click="createAccount"
				>Create one.</span
			>
		</p>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			isEmpty: true,
			username: '',
			password: '',
			markers: localStorage.getItem('markers'),
			userNotFound: false,
			logged: false,
		}
	},
	methods: {
		checkInput: function(event) {
			// Verifies if there is input text for animation
			if (event.target.nodeName && event.target.nodeName === 'INPUT') {
				if (event.target.value) {
					event.target.setAttribute('filled', 'true')
				} else {
					event.target.removeAttribute('filled')
				}
			}
		},
		submitLogin(event) {
			event.preventDefault()
			axios
				.post('http://localhost:8081/login', {
					username: this.username,
					password: this.password,
					markers: this.markers,
				})
				.then((res) => {
					// If user not found in the database > returns error

					if (res.data == 'User Not Found') {
						this.userNotFound = true
					} else {
						// When user is found
						// Update login status
						this.$store.commit('updateLoginStatus')
						this.$router.push('/map').catch((error) => {
							console.log(error)
						})
						const markers = res.data.markers
						localStorage.setItem('markers', JSON.stringify(markers))
						console.log(markers)

						// Set current user and markers
						this.$store.dispatch('addCurrentUser', res.data)
						this.$store.dispatch(
							'setCurrentUserId',
							this.$store.state.currentUser._id
						)
						this.$store.dispatch('addCurrentMarkers', markers)

						localStorage.setItem('userId', this.$store.state.currentUser._id)
					}
				})
				.catch((error) => {
					console.log(error)
				})
			event.preventDefault()
		},
		createAccount() {
			this.$store.dispatch('setSignUpStatus')
		},
	},
}
</script>

<style>
.form {
	font-family: 'Roboto', sans-serif;
	/* border: 1px solid #ccc; */
	width: 13em;
	height: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	top: 25vh;
	margin: 0 auto;
	border-radius: 20px;
}

.login-form {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.login-form label {
	margin-right: 5.5em;
}

.form h1 {
	color: #ffb969;
	padding: 0;
}

.form h1,
p {
	text-align: center;
	margin-bottom: 2em;
	color: #ddd;
}

.form input,
label {
	transition: all 200ms;
	touch-action: manipulation;
}

.form input {
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	height: 2em;
	margin: 0.5em 0;
	width: 100%;
	background: rgba(255, 255, 255, 0.3);
	color: #64B6AC;
	border-radius: 20px;
	padding: 0 3em;
}

.form label {
	display: block;
	transform-origin: left bottom;
	transform: translate(2.8em, -2em);
	color: #ddd;
	cursor: text;
}

.form input:focus {
	border: none;
	outline-width: 0;
	border-bottom: 1px solid #64B6AC;
}

.form input:focus + label {
	color: #64B6AC;
	transform: translate(0, -3.7em);
}

.form input[filled='true'] + label {
	transform: translate(0, -3.7em);
}

.notFound {
	color: red;
	font-weight: bold;
}

.submitButton {
	border: none;
	font-weight: bold;
	color: #303030;
	background: #64B6AC;
	outline: none;
	border-radius: 15px;
	padding: 0.5em 1em;
	margin-bottom: 0.5em;
	width: 100%;
}

.submitButton:hover {
	background: #64B6AC;
	opacity: 0.8;
	cursor: pointer;
}

.form {
	transform: scale(1.2);
}

#passIcon {
	width: 0.8em;
	position: relative;
	bottom: 2.9em;
	right: 5em;
}

#userIcon {
	width: 1em;
	position: relative;
	bottom: 3em;
	right: 5em;
}

#createAcc {
	z-index: 5;
	cursor: pointer;
}

#createAcc:hover {
	border-bottom: 1px solid #64B6AC;
}
</style>
