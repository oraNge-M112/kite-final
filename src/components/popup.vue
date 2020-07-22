<template>
	<div>
		<div class="weatherValues">
			<div id="header">{{ locationName }}</div>
			<div>
				<img id="currentTempIcon" src="@/assets/wi-thermometer.svg" />:
				{{ currentTemp }}
			</div>
			<div><img id="maxTempIcon" src="@/assets/wi-raindrops.svg" />: {{ precipitations }} %</div>
			<div><img id="minTempIcon" src="@/assets/wi-humidity.svg" />: {{ humidity }} %</div>
			<div><img id="windSpeedIcon" src="@/assets/wi-windy.svg" />: {{ windSpeed }} km/h</div>
			<div>
				<img id="directionIcon" src="@/assets/wi-wind-deg.svg" />:
				{{ calculateDirection(this.angle) }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'popup',
	props: ['location'],
	data() {
		return {
			locationName: '',
			angle: 222,
      currentTemp: 15,
      precipitations: 0,
      humidity: 0,
			windSpeed: 15,
		}
	},
	created() {
		const axios = require('axios')

		axios({
			method: 'GET',
			url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
			headers: {
				'content-type': 'application/octet-stream',
				'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
				'x-rapidapi-key': '65b93e7d9emsh837d4114ae81b9ap1f7365jsn94ce81f8c2ed',
				useQueryString: true,
			},
			params: {
				language: 'en',
				latlng: `${this.location.lat}, ${this.location.lng}`,
			},
		})
			.then((response) => {
				console.log(response)
				this.locationName =
					response.data.results[
						response.data.results.length - 1
					].formatted_address
			})
			.catch((error) => {
				console.log(error)
			})
	},
	mounted() {
		
	},
	methods: {
		calculateDirection(angle) {
			var directions = [
				'North',
				'North-West',
				'West',
				'South-West',
				'South',
				'South-East',
				'East',
				'North-East',
			]
			return directions[
				Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
			]
		},
	},
}
</script>

<style>
#header {
	font-size: 2em;
	color: #ffb969;
	cursor: default;
}

.weatherValues img {
	width: 2em;
}

.weatherValues div {
	display: flex;
	align-items: center;
	justify-content: center;
  cursor: default;
  font-size: 1.3em;
}

.leaflet-popup-content-wrapper {
	width: 20em;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
