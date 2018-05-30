<template>
  <div id="Yours">
    <div class="card-header text-center">
      <router-link class="btn btn-secondary btn-lg" to="/yours">Search For YOUR Cards</router-link>
      <button class="btn btn-primary btn-lg">Search For THEIR Cards</button>
    </div>
    <Search :yourTrades="yourTrades" :theirTrades="theirTrades"/>
  </div>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'Theirs',
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
