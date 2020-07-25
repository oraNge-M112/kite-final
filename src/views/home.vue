<template>
	<div>
		<navmenu></navmenu>
		<user v-if="displayLogin"></user>
		<leafmap @active="accountOn"></leafmap>
	</div>
</template>

<script>
import user from '../components/user'
import leafmap from '../components/leafmap'
import navmenu from '../components/navmenu'

export default {
	components: {
		user,
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
