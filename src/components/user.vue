<template>
  <div class="userLogin">
    <h1>Log In</h1>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    <label for="password">Password:</label>
    <input type="password" name="password" id="password">
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>

.userLogin {
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
  left: 40%;
  padding: 0.5em 1.5em;
}

</style>