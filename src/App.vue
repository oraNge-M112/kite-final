<template>
  <div id="app">
    <router-view to="/"/>
  </div>
</template>


<script>

export default {
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

:root {
	--orange-color: #ffb969;
	--blue-color: #64b6ac;
	--gray-color: #303030;
	--err-color: #d64933;
	--purp-color: #E5E1EE;
}

#app {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	font-size: 16px;
	font-family: 'Montserrat', sans-serif;
	scroll-behavior: smooth;
	user-select: none;
}
</style>
