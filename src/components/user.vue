<template>
	<div class="user-menu">
		<navmenu></navmenu>
		<div class="background-image">
			<img src="../assets/login-background.jpg" id="logbg" alt="" />
		</div>
		<loginform></loginform>
	</div>
</template>

<script>
import navmenu from './navmenu'
import loginform from './loginform'

export default {
	components: {
		navmenu,
		loginform
	},
	data() {
		return {}
	},
}
</script>

<style>
.background-image {
	position: absolute;
	z-index: -2;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100%;
}

#logbg {
	width: 100%;
	height: 100%;
}
</style>
