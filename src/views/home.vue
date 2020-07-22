<template>
	<div>
		<nav class="header">
			<ul>
				<li class="title">
					<img src="../assets/kitesurfing.svg" />
					<span>Kite-Surfing</span>
				</li>
				<li class="addMarker" @click="isDisplayed = !isDisplayed">
					New Marker
				</li>
				<li class="user" @click="displayLogin = !displayLogin">
					<svg style="width:40px;height:40px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
						/>
					</svg>
				</li>
			</ul>
		</nav>
    <div class="add-marker-container" v-if="isDisplayed">
			<h1>Add New Marker</h1>
			<label for="headerName">Name of the marker: </label>
			<input type="text" name="headerName" id="headerName" />
			<br />
			<label for="cityName">City name: </label>
			<input type="text" name="cityName" id="cityName" />
			<br />
			<label for="notes">Other observations: </label>
			<input type="text" name="notes" id="notes" />
			<br />
			<button>Save Marker</button>
		</div>
    <user v-if="displayLogin"></user>
	</div>
</template>

<script>

import user from '../components/user'

export default {
  components: {
    user
  },
	data() {
		return {
			isDisplayed: false,
			displayLogin: false,
		}
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
}

.header ul {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
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

.add-marker-container {
	width: 17em;
	height: 20em;
	background-color: lightcoral;
	z-index: 2;
	position: absolute;
	top: 30%;
	left: 40vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: #303030;
	color: #ffb969;
	font-size: 1.1em;
	border-radius: 10%;
}

.add-marker-container button {
	color: #ffb969;
	background-color: #303030;
	border-radius: 10px;
	border: none;
	padding: 0.5em;
	transition: ease-in-out;
	transition-duration: 500ms;
}

.add-marker-container button:hover {
	background-color: #505050;
	color: #ffb969;
}

.add-marker-container button:focus,
.add-marker-container button:active {
	border: none;
}
</style>
