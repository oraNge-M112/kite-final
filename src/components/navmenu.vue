<template>
	<div>
		<nav class="header">
			<ul>
				<li class="title" @click="$router.push('/')">
					<img src="../assets/kitesurfing.svg" />
					<span>Kite-Surfing</span>
				</li>
				<li class="addMarker" @click="isDisplayed = !isDisplayed">
					New Marker
				</li>
				<li class="user" @click="$router.push('account')">
					<svg style="width:40px;height:40px" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
						/>
					</svg>
				</li>
			</ul>
		</nav>
		<addnew v-if="isDisplayed"></addnew>
	</div>
</template>

<script>

import addnew from './addnew'

export default {
	components: {
		addnew
	},
	data() {
		return {
			isDisplayed: false,
		}
	},
}
</script>

<style>
.header {
	background-color: #303030;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
}

.header ul {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	width: 95vw;
}

.header ul li {
	padding: 1rem 3rem;
	cursor: pointer;
	font-size: 2rem;
	color: #ffb969;
}

.title {
	line-height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.header ul li:first-child {
	margin-right: auto;
}
</style>
