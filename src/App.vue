<template>
  <div id="app">
    <leafmap></leafmap>
    <router-view/>
  </div>
</template>

<script>

import leafmap from './components/leafmap'

export default {
  components: {
    leafmap
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script:600&display=swap');

#app {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-size: 16px;
	font-family: 'Dancing Script', sans-serif;
	scroll-behavior: smooth;
	user-select: none;
}
</style>
