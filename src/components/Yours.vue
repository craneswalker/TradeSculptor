<template>
  <div id="Yours">
    <div class="card-header text-center">
      <button class="btn btn-primary btn-lg">Search For YOUR Cards</button>
      <router-link class="btn btn-secondary btn-lg" to="/theirs">Search For THEIR Cards</router-link>
    </div>
    <Search :yourTrades="yourTrades" :theirTrades="theirTrades"/>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'Yours',
  components: {
    Search
  },
  props: [
    'yourTrades',
    'theirTrades'
  ],
}
</script>

<style scoped>

</style>
