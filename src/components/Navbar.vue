<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center flex-column">
      <h1>Trade Sculptor</h1>
      <mq-layout mq="md" class="text-center">
        <section :class='{hidden : navToggle}'>
          <router-link class="btn btn-secondary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-secondary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <button @click="navToggle = !navToggle" class="navbar-toggler btn-secondary" data-target="#navbarColor01" aria-controls="navbarColor01">
          <span class="navbar-toggler-icon"></span>
        </button>
      </mq-layout>
      <mq-layout mq="lg">
        <section class="desktop-buttons">
          <router-link class="btn btn-secondary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-secondary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
      </mq-layout>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      navToggle: true
    }
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}
.desktop-buttons {
  display: flex;
  flex-direction: row; 
}
.navbar-brand, .navbar-toggler-icon {
  margin:0px
}
</style>
