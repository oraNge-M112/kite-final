<template>
	<div>
		<navmenu></navmenu>
		<div class="background-image">
			<img src="../assets/signup-background.jpg" id="logbg" />
		</div>
		<div class="form">
			<form class="signup-form" method="POST">
				<h1>Sign Up</h1>
				<img src="../assets/email.svg" id="emailIcon" />
				<input
					type="email"
					name="email"
					id="email"
					required
					autocomplete="off"
					@input="checkInput"
					v-model="email"
				/>
				<label for="email">Email:</label>
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
				<img src="../assets/password.svg" id="passIcon" />
				<button class="submitButton" @click="registerAcc">
					<span>Create Account</span>
				</button>
				<span v-if="userExists" class="userExists">
					There is already an user with this email or username.
				</span>
			</form>
			<p class="alreadyAcc">
				You already have an account? <br /><span
					id="createAcc"
					@click="goToLogin"
					>Log in.</span
				>
			</p>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import navmenu from './navmenu.vue'

export default {
	data() {
		return {
			email: '',
			username: '',
			password: '',
			userExists: false,
		}
	},
	components: {
		navmenu,
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
			this.userExists = false
		},
		goToLogin() {
			this.$router.push('/login')
		},
		registerAcc(event) {
			event.preventDefault()
			const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			const validEmail = reg.exec(this.email)
			if (!validEmail) {
				console.log('Not a valid Email!')
			} else {
				axios
					.post('http://localhost:8081/signup', {
						email: this.email,
						username: this.username,
						password: this.password,
					})
					.then((res) => {
						if (res) {
							this.$router.push('/login')
							this.userExists = false
						} else {
							this.userExists = true
						}
					})
			}
		},
	},
}
</script>

<style>
.background-image {
	position: absolute;
	z-index: -2;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
}

#logbg {
	width: 100%;
	height: 100%;
	filter: brightness(70%);
	background-size: cover;
}

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

.signup-form {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.signup-form label {
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
	color: #64b6ac;
	border-radius: 20px;
	padding: 0 3em;
}

.form label {
	display: block;
	transform-origin: left bottom;
	transform: translate(2.8em, -1.9em);
	color: #ddd;
	cursor: text;
}

.form input:focus {
	border: none;
	outline-width: 0;
	border-bottom: 1px solid #64b6ac;
}

.form input:focus + label {
	color: #64b6ac;
	transform: translate(0, -3.7em);
}

.form input[filled='true'] + label {
	transform: translate(0, -3.7em);
}

.userExists {
	color: red;
	position: relative;
	width: 185%;
}

.submitButton {
	border: none;
	font-weight: bold;
	color: #303030;
	background: #64b6ac;
	outline: none;
	border-radius: 15px;
	padding: 0.5em 1em;
	margin-bottom: 0.5em;
	width: 100%;
}

.submitButton:hover {
	background: #64b6ac;
	opacity: 0.8;
	cursor: pointer;
}

.form {
	transform: scale(1.2);
}

.alreadyAcc {
	width: 110%;
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

#emailIcon {
	width: 0.8em;
	position: relative;
	top: 1.6em;
	right: 5em;
}

#createAcc {
	z-index: 5;
	cursor: pointer;
}

#createAcc:hover {
	border-bottom: 1px solid #64b6ac;
}
</style>
