<template>
	<div>
		<navmenu></navmenu>
		<div class="background-image"><img src="../assets/login-background.jpg" alt="Kite Surfing"></div>
		<div class="form" v-show="login">
			<form action=user.submit.js class="login-form">
				<h1>Log In</h1>
				<input
					type="text"
					name="username"
					id="username"
					autocomplete="none"
					required
					@input="checkInput"
				/>
				<label for="username">Username:</label>
				<input
					type="password"
					name="password"
					id="password"
					required
					@input="checkInput"
				/>
				<label for="password">Password:</label>
        <button type="submit" @click="submitLogin">Log in</button>
			</form>
			<p>You don't have an account? <br /><span :click="createAccount">Create one.</span></p>
		</div>
	</div>
</template>

<script>
import navmenu from './navmenu'

export default {
	components: {
		navmenu,
	},
	data() {
		return {
			data: localStorage.getItem('markers'),
      isEmpty: true,
      login: true
		}
	},
	methods: {
		checkInput: function(event) {
			if (event.target.nodeName && event.target.nodeName === 'INPUT') {
				if (event.target.value) {
					event.target.setAttribute('filled', 'true')
				} else {
					event.target.removeAttribute('filled')
				}
			}
			console.log(event.target.value)
    },
    submitLogin: function(event) {
      console.log(event.target.value)
      event.target.value = ''
    },
    createAccount() {
      this.login = false
    }
  },
}
</script>

<style>
.form {
	font-family: 'Roboto', sans-serif;
	border: 1px solid #ccc;
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
}

.form h1,
p {
	text-align: center;
	margin-bottom: 2em;
}

.form input,
label {
	transition: all 500ms;
	touch-action: manipulation;
}

.form input {
	border: none;
	border-bottom: 1px solid #ddd;
	height: 1.5em;
	margin: 0.5em 0;
	width: 100%;
  color: #5fa8d3;
}

.form label {
	display: block;
	transform-origin: left bottom;
	transform: translate(1.5em, -2em);
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
</style>
