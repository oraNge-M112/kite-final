<template>
	<div>
		<div class="weatherValues">
			<div id="header" @click="updateWeatherData">{{ this.city }}</div>
			<div>
				<img id="currentTempIcon" src="@/assets/wi-thermometer.svg" />
				{{ currentTemp }}
			</div>
			<!-- <div>
				<img id="maxTempIcon" src="@/assets/wi-raindrops.svg" />
				{{ precipitations }} %
			</div> -->
			<div>
				<img id="minTempIcon" src="@/assets/wi-humidity.svg" /> {{ humidity }} %
			</div>
			<div>
				<img id="windSpeedIcon" src="@/assets/wi-windy.svg" />
				{{ windSpeed }} km/h
			</div>
			<div>
				<img id="directionIcon" src="@/assets/wi-wind-deg.svg" />
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
			city: 'Paris',
		}
	},
	// created() {
	// 	const axios = require('axios')
	// 	axios({
	// 		method: 'GET',
	// 		url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
	// 		headers: {
	// 			'content-type': 'application/octet-stream',
	// 			'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
	// 			'x-rapidapi-key': process.env.GEOCODE_KEY,
	// 			useQueryString: true,
	// 		},
	// 		params: {
	// 			language: 'en',
	// 			latlng: `${this.location.lat}, ${this.location.lng}`,
	// 		},
	// 	})
	// 		.then((response) => {
	// 			console.log(response)
	// 			this.locationName = response.data.results[response.data.results.length - 1].address_components[0].long_name
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
	// 		})
	// },
	mounted() {},
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
		updateWeatherData() {
			const axios = require('axios')
			axios({
				method: 'GET',
				url: 'https://community-open-weather-map.p.rapidapi.com/weather',
				headers: {
					'content-type': 'application/octet-stream',
					'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
					'x-rapidapi-key': process.env.WEATHER_KEY,
					useQueryString: true,
				},
				params: {
					id: '',
					units: 'metric',
					q: this.city,
				},
			})
				.then((response) => {
					console.log(response.data)
					this.city = response.data.name
					this.angle = response.data.wind.deg
					this.currentTemp = response.data.main.temp
					this.windSpeed = response.data.wind.speed
					this.humidity = response.data.main.humidity
				})
				.catch((error) => {
					console.log(error)
				})
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
