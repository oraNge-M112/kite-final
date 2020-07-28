<template>
	<div>
		<navmenu></navmenu>
		<leafmap></leafmap>
	</div>
</template>


<script>
import leafmap from '../components/leafmap'
import navmenu from '../components/navmenu'

// @active="accountOn" prop for leafmap in case user component shows over the map 

export default {
	components: {
		leafmap,
		navmenu
	},
	data() {
		return {}
	},
}
</script>

<style>

</style>
