<template>
  <div id="Landing" class="text-center">
    <h4 class="text-center display-5">Find the cards you want to trade away and trade for to make sure the trade is fair!</h4>
    <img src="../assets/jace.jpg" alt="Jace">
    <router-link class="btn btn-primary btn-lg" to="/yours">Get Started</router-link>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.text-center {
  margin: 20px;
}

img {
  width: 100%;
  margin-bottom: 10px;
}
</style>
