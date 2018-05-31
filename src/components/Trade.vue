<template>
  <div id="Trade">
    <div class="jumbotron">
      <h2 class="display-5">Your Cards</h2>
      <h4 class="display-5 yourTradeValue"></h4>
      <div>
        <ul id="yourTradeUL">
          <li v-for="yourTrade in yourTrades" :key="yourTrade.set" class="text-center yourTradeLI">
            <div class="card border-primary flex-column mb-3" >
              <div class="card-header">Set: {{yourTrade.set}}</div>
              <div class="card-body btn-secondary">
                <h4 class="card-title">{{yourTrade.title}}</h4>
                <img :class=yourTrade.border :src=yourTrade.image :alt=yourTrade.title>
                <p>Quality:</p>
                <div class="form-group">
                  <select @change="cardTotals()" class="custom-select yourTradeSelector">
                    <option :value=yourTrade.price[0]>Near Mint: ${{yourTrade.price[0]}}</option>
                    <option :value=yourTrade.price[1]>Excellent: ${{yourTrade.price[1]}}</option>
                    <option :value=yourTrade.price[2]>Very Good: ${{yourTrade.price[2]}}</option>
                    <option :value=yourTrade.price[3]>Good: ${{yourTrade.price[3]}}</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="jumbotron">
      <h2 class="display-5">Their Cards</h2>
      <h4 class="display-5 theirTradeValue"></h4>
      <div>
        <ul id="theirTradeUL">
          <li v-for="theirTrade in theirTrades" :key="theirTrade.set" class="text-center theirTradeLI">
            <div class="card border-primary flex-column mb-3" >
              <div class="card-header">Set: {{theirTrade.set}}</div>
              <div class="card-body btn-secondary">
                <h4 class="card-title">{{theirTrade.title}}</h4>
                <img :class=theirTrade.border :src=theirTrade.image :alt=theirTrade.title>
                <p>Quality:</p>
                <div class="form-group">
                  <select @change="cardTotals()" class="custom-select theirTradeSelector">
                    <option :value=theirTrade.price[0]>Near Mint: ${{theirTrade.price[0]}}</option>
                    <option :value=theirTrade.price[1]>Excellent: ${{theirTrade.price[1]}}</option>
                    <option :value=theirTrade.price[2]>Very Good: ${{theirTrade.price[2]}}</option>
                    <option :value=theirTrade.price[3]>Good: ${{theirTrade.price[3]}}</option>
                  </select>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Trade',
  props:[
    'yourTrades',
    'theirTrades'
  ],
  mounted(){
    this.cardTotals()
  },
  methods: {
    cardTotals() {
      const yourItems = document.querySelectorAll('.yourTradeSelector')
      const yourTradeTotal = document.querySelector('.yourTradeValue')
      let yourSum = 0
      for (let i = 0; i < yourItems.length; ++i) {
        yourSum += (parseFloat(yourItems[i].value))
        yourTradeTotal.textContent = "Value: $" + yourSum.toFixed(2)
      }
      const theirItems = document.querySelectorAll('.theirTradeSelector')
      const theirTradeTotal = document.querySelector('.theirTradeValue')
      let theirSum = 0
      for (let i = 0; i < theirItems.length; ++i) {
        theirSum += (parseFloat(theirItems[i].value))
        theirTradeTotal.textContent = "Value: $" + theirSum.toFixed(2)
      }
    }
  }  
}
</script>

<style scoped>
.custom-select {
  max-width: 300px;
}
.btn-lg {
  width: 49%;
}
.mb-3, li {
  display: inline-block;
  max-width: 15rem;
  min-width: 250px;
  margin-right: 10px;
  list-style-type: none;
}  

.card-header {
  min-height: 100px;
  background: rgb(49,88,130);	
}

h4 {
  min-height: 100px;
}

.black, .alpha {
  border: 6px solid black;
  border-radius: 6px;
  display: inline-block;
  position: relative;
}

.white {
  border: 6px solid white;
  border-radius: 6px;
  display: inline-block;
  position: relative;
}

.gold {
  border: 6px solid rgb(184,159,109)	;
  border-radius: 6px;
  display: inline-block;
  position: relative;
}

.trade-button {
  margin: 10px;
}

</style>