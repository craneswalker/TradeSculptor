<template>
  <div id="Trade" class="align-items-center">
    <section id="difference-container align-items-center">
        <div id="difference-card" class="card mb-3 text-center">
          <h1 class="display-1"></h1>
        </div>
        <div class="form-group">
          <label for="select">Wiggle Room</label>
          <select @change="cardTotals()" class="custom-select wiggleSelector">
            <option value="0.5">$0.50</option>
            <option value="1">$1</option>
            <option value="2">$2</option>
            <option value="3">$3</option>
            <option value="4">$4</option>
            <option value="5">$5</option>
          </select>
        </div>
    </section>
    <mq-layout mq="md">
      <section id="trade-container-md">
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
                    <div class="form-group">
                      <select @change="cardTotals()" class="custom-select yourQty">
                        <option :value=1>1x</option>
                        <option :value=2>2x</option>
                        <option :value=3>3x</option>
                        <option :value=4>4x</option>
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
                    <div class="form-group">
                      <select @change="cardTotals()" class="custom-select theirQty">
                        <option :value=1>1x</option>
                        <option :value=2>2x</option>
                        <option :value=3>3x</option>
                        <option :value=4>4x</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </mq-layout>
    <mq-layout mq="lg">
      <section id="trade-container-lg">
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
                    <div class="form-group">
                      <select @change="cardTotals()" class="custom-select yourQty">
                        <option :value=1>1x</option>
                        <option :value=2>2x</option>
                        <option :value=3>3x</option>
                        <option :value=4>4x</option>
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
                    <div class="form-group">
                      <select @change="cardTotals()" class="custom-select theirQty">
                        <option :value=1>1x</option>
                        <option :value=2>2x</option>
                        <option :value=3>3x</option>
                        <option :value=4>4x</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </mq-layout>


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
      //Total value of cards you are trading
      console.log(this.yourTrades)
      const yourItems = document.querySelectorAll('.yourTradeSelector')
      const yourTradeTotal = document.querySelector('.yourTradeValue')
      const yourQty = document.querySelectorAll('.yourQty')
      let yourSum = 0
      for (let i = 0; i < yourItems.length; ++i) {
        yourSum += (parseFloat(yourItems[i].value))*yourQty[i].value
        yourTradeTotal.textContent = "Value: $" + yourSum.toFixed(2)
      }

      //Total value of cards your friend is trading
      const theirItems = document.querySelectorAll('.theirTradeSelector')
      const theirTradeTotal = document.querySelector('.theirTradeValue')
      const theirQty = document.querySelectorAll('.theirQty')
      let theirSum = 0
      for (let i = 0; i < theirItems.length; ++i) {
        theirSum += (parseFloat(theirItems[i].value))*theirQty[i].value
        theirTradeTotal.textContent = "Value: $" + theirSum.toFixed(2)
      }

      //Difference in both total values
      const difference = (yourSum - theirSum).toFixed(2)
      const omitNegDiff = Math.abs(difference)
      const differenceCard = document.querySelector('#difference-card')
      differenceCard.textContent = "Trade Difference: $" + omitNegDiff
      
      //Calculating if the difference between the trades is between the accepted range
      const wiggleSelector = document.querySelector('.wiggleSelector')
      const wiggleRoom = parseInt(wiggleSelector.value)
      const diff = parseInt(differenceCard.textContent.substring(19))
      if(diff > wiggleRoom == true) {
        differenceCard.style.backgroundColor = "red"
      }else{
        differenceCard.style.backgroundColor = "green"
      }
    }
  }  
}
</script>

<style scoped>
#Trade {
  display: flex;
  flex-direction: column;
}
#trade-container-lg {
  display: flex;
  flex-direction: row;
}
#trade-container-md {
  display: flex;
  flex-direction: column;
}
#difference-container {
  display: flex;
  flex-direction: column;
  height: 150px;
}
#difference-card {
  font-size: 25px
}

.jumbotron {
  width: 100%;
  border: 1px solid rgb(49,88,130)
}
.custom-select {
  max-width: 300px;
}
.yourTradeSelector {
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

ul {
  text-align: center
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