<template>
	<div>
		<button @click='saveMarkersToDb'>Save Markers</button>
		<navmenu></navmenu>
		<leafmap :key="this.$store.state.keyForMap"></leafmap>
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
		return {}
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
	}
}
</script>

<style>
	button {
		position: absolute;
		left: 5em;
		top: 10em;
		z-index: 5;
	}
</style>
