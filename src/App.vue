<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css">

    <Navbar/>

    <router-view :yourTrades="yourTrades" :theirTrades="theirTrades"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Landing from '@/components/Landing'
import Search from '@/components/Search'
import Yours from '@/components/Yours'
import Theirs from '@/components/Theirs'

export default {
  name: 'App',
  components: {
    Navbar,
    Landing,
    Search,
    Yours,
    Theirs,
  },
  data(){
    return{
      theirTrades: [],
      yourTrades: []
    }
  },
  mounted() {
    this.yourTradesList()
    this.theirTradesList()
  },
  methods:{
    yourTradesList() {
      fetch("../static/yourTrades.json")
        .then(response => response.json())
        .then(yourTrades => this.yourTrades = yourTrades)
    },
    theirTradesList(){
      fetch("../static/theirTrades.json")
        .then(response => response.json())
        .then(theirTrades => this.theirTrades = theirTrades)
    }, 
  }
}
</script>

<style>
</style>
