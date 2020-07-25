<template>
  <div class="userMarkers">
    <p>{{ this.data }}</p>
    <p>{{ this.locationName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: localStorage.getItem('markers')
    }
  }
}
</script>

<style>

.userMarkers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10em;
  background: chocolate;
  color: white;
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 43vw;
  padding: 0.5em 1.5em;
}

</style>