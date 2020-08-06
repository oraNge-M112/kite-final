<template>
	<div id="containerMainPage">
		<div class="controlArea">
			<button class="controlsBtn" @click="expandControls">
				<span v-if="this.showControls" class="hideControls">Hide Controls</span>
				<span v-if="!this.showControls" class="showControls">Show Controls</span>
			</button>
		</div>
		<div class="controls" v-if="showControls">
				<button @click="saveMarkersToDb" class="ctrlBtn">Save Markers</button>
				<button @click="deleteFirst" class="ctrlBtn">Delete First</button>
				<button @click="deleteLast" class="ctrlBtn">Delete Last</button>
			</div>
		<navmenu></navmenu>
		<leafmap
			:class="{ mapPlacement: this.$store.state.logged }"
			class="map"
			:key="this.$store.state.keyForMap"
		></leafmap>
	</div>
</template>

<script>
import leafmap from '../components/leafmap'
import navmenu from '../components/navmenu'
import axios from 'axios'

export default {
	components: {
		leafmap,
		navmenu,
	},
	data() {
		return {
			showControls: false,
		}
	},
	methods: {
		async saveMarkersToDb() {
			const markers = localStorage.getItem('markers')

			const arrayed = JSON.parse(markers)
			console.log(arrayed)

			try {
				await axios
					.put('http://localhost:8081/save', {
						userId: this.$store.state.currentUserId,
						markers: arrayed,
					})
					.then((res) => console.log(res))
			} catch (error) {
				console.log(error)
			}
		},
		deleteFirst() {
			const remake = JSON.parse(localStorage.getItem('markers'))
			remake.shift()
			localStorage.setItem('markers', JSON.stringify(remake))
			this.$store.commit('refreshMap')
		},
		deleteLast() {
			const remake = JSON.parse(localStorage.getItem('markers'))
			remake.pop()
			localStorage.setItem('markers', JSON.stringify(remake))
			this.$store.commit('refreshMap')
		},
		expandControls() {
			this.showControls = !this.showControls
		},
	},
}
</script>

<style>
.map {
	margin: 0;
	position: absolute;
	left: 0;
	top: 9em;
}

.leaflet-top .leaflet-left {
	margin-top: 1em;
}

.showControls {
	color: #ffb969;
}

.hideControls {
	color: #ddd;
}

.controlArea {
	position: absolute;
	top: 6.5em;
	left: 0;
	z-index: 5;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.controlsBtn {
	border: 1px solid #ddd;
	border-radius: 10px;
	background: rgba(0, 0, 0, 0.5);
	padding: 0.3em 1em;
	cursor: pointer;
}

.controlsBtn:focus {
	outline: none;
}

.controlsBtn:hover {
	background: rgba(0, 0, 0, 0.6);
}

.controls {
	position: absolute;
	top: 9em;
	z-index: 5;
	left: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.controls button {
	width: 8em;
	padding: 0.3em 0;
	margin-right: 1.2em;
	border-radius: 10px;
	border: 1px solid #ddd;
	background: rgba(0, 0, 0, 0.5);
	color: #ffb969;
	cursor: pointer;
}

.controls button:focus {
	outline: none;
}

.controls button:hover {
	background: rgba(0, 0, 0, 0.8)
}

</style>
