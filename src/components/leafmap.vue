<template>
	<div id="mapleaf" style="height: 80vh;">
		<div class="info" style="height: 10%">
			<span>Center: {{ center }}</span>
			<span>Zoom: {{ zoom }}</span>
		</div>
		<l-map
			style="height: 80%; width: 100%"
			:zoom="zoom"
			:center="center"
			@update:zoom="zoomUpdated"
			@update:center="centerUpdated"
			@update:bounds="boundsUpdated"
			@click="addMarker"
		>
			<!-- <l-tile-layer :url="url"></l-tile-layer> -->
			<l-tile-layer :url="url"></l-tile-layer>
			<l-marker
				v-for="(marker, index) in markers"
				:key="marker.index"
				:lat-lng="marker"
			>
				<l-popup>
					<popup :location="marker"></popup>
					<button id="deleteButton" @click="removeMarker(index)">
						Delete Marker
					</button>
				</l-popup>
			</l-marker>
		</l-map>
	</div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import popup from './popup.vue'

// Work around for the GET DATA Network error for invalid URL marker.png
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})
//

export default {
	name: 'leafmap',
	components: {
		LMap,
		LTileLayer,
		LMarker,
		LPopup,
		popup,
	},
	data() {
		return {
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			zoom: 3,
			center: [47.41322, -1.219482],
			bounds: null,
			markers: [],
		}
	},
	methods: {
		zoomUpdated(zoom) {
			this.zoom = zoom
		},
		centerUpdated(center) {
			this.center = center
		},
		boundsUpdated(bounds) {
			this.bounds = bounds
		},
		addMarker(event) {
			this.markers.push(event.latlng)
			const modifiedMarker = JSON.stringify(this.markers)
			localStorage.setItem('markers', modifiedMarker)
		},
		removeMarker(index) {
			this.markers.splice(index, 1)
			localStorage.setItem('markers', JSON.stringify(this.markers))
		},
	},
	mounted() {
		if (localStorage.getItem('markers')) {
			try {
				this.markers = JSON.parse(localStorage.getItem('markers'))
			} catch (e) {
				localStorage.removeItem('markers')
			}
		}
	},
}
</script>

<style scoped>
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-family: sans-serif;
}

#mapleaf {
	position: relative;
	top: 6em;
	z-index: 1;
}

#deleteButton {
	width: 10em;
	cursor: pointer;
	border-radius: 10px;
	box-shadow: none;
	color: white;
	background-color: #303030;
	margin: 1em 0;
	padding: 0.3em;
}
</style>
