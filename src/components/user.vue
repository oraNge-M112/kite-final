<template>
	<div class="user-menu">
		<navmenu></navmenu>
		<div class="background-image">
			<img src="../assets/login-background.jpg" id="logbg" alt="" />
		</div>
		<div class="form">
			<form class="login-form" method="POST">
				<h1>Log In</h1>
				<input
					type="text"
					name="username"
					id="username"
					autocomplete="none"
					required
					@input="checkInput"
					v-model="username"
				/>
				<label for="username">Username:</label>
				<input
					type="password"
					name="password"
					id="password"
					required
					@input="checkInput"
					v-model="password"
				/>
				<label for="password">Password:</label>
				<button @click="submitLogin" class="submitButton">Log in</button>
				<span v-if='userNotFound' class="notFound">Wrong credentials!</span>
			</form>
			<p>
				You don't have an account? <br /><span :click="createAccount"
					>Create one.</span
				>
			</p>
		</div>
	</div>
</template>

<script>
import navmenu from './navmenu'
import axios from 'axios'

export default {
	components: {
		navmenu,
	},
	data() {
		return {
			data: localStorage.getItem('markers'),
			isEmpty: true,
			username: '',
			password: '',
			markers: localStorage.getItem('markers'),
			userNotFound: false,
			logged: false
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
		submitLogin() {
			axios
				.post('http://localhost:8081/login', {
					username: this.username,
					password: this.password,
					markers: this.markers
				})
				.then((res) => {
					
					// If user not found in the database > returns error

					if (res.data == 'User Not Found') {
						this.userNotFound = true
					} else {

						// When user is found 
						this.$store.commit('updateLoginStatus')
						// not sure if still need this 
						// have to check it more
						// this.$emit('userLogged', this.userNotFound) 
						this.$router.push('/map').catch( (error) => { console.log (error) })
						const markers = window.localStorage.getItem('markers')
						console.log(markers)

						// Set current user and markers
						this.$store.dispatch('addCurrentUser', res.data)
						this.$store.dispatch('addCurrentMarkers', markers)
						console.log(res.data)

					}
				})
				.catch((error) => {
					console.log(error)
				})
			event.preventDefault()
		},
		createAccount() {
		},
	},
}
</script>

<style>
.form {
	font-family: 'Roboto', sans-serif;
	/* border: 1px solid #ccc; */
	width: 20em;
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
	border: none;
	border-bottom: 1px solid #ddd;
	height: 1.5em;
	margin: 0.5em 0;
	width: 100%;
	background: rgba(255, 255, 255, 0.2);
	color: #5fa8d3;
	font-weight: bold;
}

.form label {
	display: block;
	transform-origin: left bottom;
	transform: translate(2.8em, -1.8em);
	color: #ddd;
	font-weight: bold;
	cursor: text;
}

.form input:focus {
	border: none;
	outline-width: 0;
	border-bottom: 1px solid #5fa8d3;
}

.form input:focus + label {
	transform: translate(0, -3.4em);
}

.form input[filled='true'] + label {
	transform: translate(0, -3.4em);
}

.background-image {
	position: absolute;
	z-index: -2;
	left: 0;
	top: 0;
	width: 100vw;
	height: 45.1em;
}

#logbg {
	width: 100%;
	height: 100%;
}

.notFound {
	color: red;
	font-weight: bold;
}

.submitButton {
	border: none;
	font-weight: bold;
	color: white;
	background: rgba(255, 255, 255, 0.3);
	outline: none;
	border-radius: 15px;
	padding: 0.5em 1em;
	margin-bottom: 0.5em;
}

.submitButton:hover {
	background: rgba(255, 255, 255, 0.5);
	cursor: pointer;
}

.form {
	transform: scale(1.2);
}
</style>
