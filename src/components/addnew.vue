<template>
	<div class="add-marker-container">
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
</template>

<script>
export default {
	data() {
		return {}
	},
}
</script>

<style>
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
