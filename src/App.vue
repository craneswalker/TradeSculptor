<template>
  <div id="App">
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
import Trade from '@/components/Trade'

export default {
  name: 'App',
  components: {
    Navbar,
    Landing,
    Search,
    Yours,
    Theirs,
    Trade
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
.btn {
  box-shadow: 2px 5px 20px #020202
}
</style>
