<template>
  <div id="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center flex-column">
      
      <!-- Reactive: Mobile -->
      <mq-layout mq="md" class="text-center">
        <router-link class="logo-home" to="/">
          <img class="logo" src="../assets/magic-symbol-1.png" alt="">
        </router-link>
        <section v-if="$route.path=== '/yours' || $route.path=== '/theirs'" :class='{hidden : navToggle}'>
          <router-link class="btn btn-primary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-secondary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <section v-else-if="$route.path=== '/trade'" :class='{hidden : navToggle}'>
          <router-link class="btn btn-secondary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-primary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <section v-else :class='{hidden : navToggle}'>
          <router-link class="btn btn-secondary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-secondary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <button @click="navToggle = !navToggle" class="navbar-toggler btn-secondary" data-target="#navbarColor01" aria-controls="navbarColor01">
          <span class="navbar-toggler-icon"></span>
        </button>
      </mq-layout>

      <!-- Reactive: Desktop -->
      <mq-layout mq="lg">
        <router-link class="logo-home" to="/">
          <h1 contentEditable role='textbox' class="centered" >Trade</h1>
          <img class="logo" src="../assets/magic-symbol-1.png" alt="">
          <h1 contentEditable role='textbox' class="centered" >Sculptor</h1>
        </router-link>
        <section v-if="$route.path=== '/yours' || $route.path=== '/theirs'" class="desktop-buttons">
          <router-link class="btn btn-primary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-secondary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <section v-else-if="$route.path=== '/trade'" class="desktop-buttons">
          <router-link class="btn btn-secondary btn-lg nav-link" to="/yours">Lookup Cards</router-link>    
          <router-link class="btn btn-primary btn-lg nav-link" to="/trade">See Your Trade</router-link>
        </section>
        <section v-else class="desktop-buttons">
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
      navToggle: true,
    }
  }
}
</script>

<style scoped>

#Navbar {
  box-shadow: 5px 10px 20px #080808;
}
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
.logo-home {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  text-decoration: none;
}
.logo {
  height: 100px;
}

.centered {
  font-family: sans-serif;
  text-shadow: 2px 2px 8px rgb(5, 5, 5);
  color: white;
  opacity: .6;
}

</style>
