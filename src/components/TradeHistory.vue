<template>
  <div>
    <h1>{{pastTrade.date}}</h1>
    <div id="trade-container">
      <div class="jumbotron">
        <h2 class="display-5">Your Cards</h2>
        <h4 class="display-5 yourTradeValue"></h4>
        <div>   
          <ul class='yours'>
            <li v-for='(yourTrade, index) in pastTrade.your_trade' :key='index'>
              {{yourTrade.title}} - ${{yourTrade.price[0]}}
            </li>
          </ul>
        </div>
      </div>
      <div class="jumbotron">
        <h2 class="display-5">Their Cards</h2>
        <h4 class="display-5 yourTradeValue"></h4>
        <div>
          <ul class='theirs'>
            <li v-for='(theirTrade, index) in pastTrade.their_trade' :key='index'>
              {{theirTrade.title}} - ${{theirTrade.price[0]}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'TradeHistory',
  props:[
    'pastTrade'
  ],
}
</script>

<style scoped>
#trade-container {
  display: flex;
  flex-direction: row;
}
.jumbotron {
  width: 100%;
  border: 1px solid rgb(49,88,130)
}

</style>
