<template>
	<div id="containerMainPage">
		<div class="pageInfo">
			<span class="loginInfo" v-if="!this.$store.state.logged">Please Log In to create, update and save markers to your account!</span>
		</div>
		<div class="controlArea">
			<button class="controlsBtn" @click="expandControls">
				<span v-if="this.showControls">Hide Controls</span>
				<span v-if="!this.showControls">Show Controls</span>
			</button>
			<div class="controls" v-if="showControls">
				<button @click='saveMarkersToDb' class="ctrlBtn">Save Markers</button>
				<button @click='deleteLast' class="ctrlBtn">Delete Last Marker</button>
			</div>
		</div>
		<navmenu></navmenu>
		<leafmap id="map" :key="this.$store.state.keyForMap"></leafmap>
	</div>
</template>


<script>
import leafmap from '../components/leafmap'
import navmenu from '../components/navmenu'
import axios from 'axios'

export default {
	components: {
		leafmap,
		navmenu
	},
	data() {
		return {
			showControls: false
		}
	},
	methods: {
		saveMarkersToDb() {
			const markers = localStorage.getItem('markers')

			const arrayed = JSON.parse(markers)
			console.log(arrayed)

			try {
				axios.put( 'http://localhost:8081/save', {
					userId: this.$store.state.currentUserId,
					markers: arrayed
			}).then( (res) => console.log(res))
			} catch (error) {
				console.log(error)
			}
		},
		expandControls() {
			this.showControls = !this.showControls
		}
	}
}
</script>

<style>
	#map {
		margin: 0;
		position: absolute;
		left: 0;
		top: 8em;
	}
	
	.pageInfo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loginInfo {
		z-index: 11;
		position: absolute;
		top: 5em;
		color: #D64933;
		margin-top: 1em;
	}
</style>
