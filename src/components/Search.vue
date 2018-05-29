<template>
  <div id="Search">
    <div class="form-group justify-content-center text-center">
      <label class="col-form-label col-form-label-lg" for="inputLarge">What card are you trading?</label>
      <input v-model="cardName" @keyup.enter="loadCards(cardName)" class="search form-control form-control-lg" type="text" placeholder="Card Name" id="inputLarge"/>
      <br>
      <button @click="loadCards(cardName)" type="submit" class="btn btn-primary">Find</button>
    </div>
    <div>
      <ul v-for="listOfCard in listOfCards" :key="listOfCard.set">
        <li class="text-center">
          <div class="card border-primary flex-column mb-3" >
            <div class="card-header">Set: {{listOfCard.set}}</div>
            <div class="card-body btn-secondary">
              <h4 class="card-title">{{listOfCard.title}}</h4>
              <img :class=listOfCard.border :src=listOfCard.image :alt=listOfCard.title>
              <button @click="toTrades(listOfCard)" class="trade-button btn btn-primary">Add To Trade</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data(){
    return{
      cardName:'',
      listOfCards: [],
    }
  },
  props: [
    'yourTrades',
    'theirTrades'
  ],
  methods: {
    loadCards(cardName){
      fetch(`http://localhost:3000/search/${cardName}`)
        .then(response => response.json())
        .then(response => {
          this.listOfCards = response
        })
      this.cardName = ""
    },
    toTrades(listOfCard) {
      const cardIndex = this.listOfCards.indexOf(listOfCard)
      if(this.$route.path == "/yours"){      
        this.yourTrades.push(this.listOfCards[cardIndex])
      }
      else {
        this.theirTrades.push(this.listOfCards[cardIndex])
      }
      console.log(this.theirTrades, this.yourTrades)
      alert("This card has been added to your list.  Keep searching for more, or add another!")
    }
  }
}
</script>

<style scoped>
.btn-lg {
  width: 49%;
}
.mb-3, ul {
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
