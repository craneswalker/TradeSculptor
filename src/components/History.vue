<template>
  <div>
    <ul>
      <TradeHistory v-for ="pastTrade in pastTrades" :key="pastTrade.date" :pastTrade = "pastTrade"/>
    </ul>
  </div>
</template>

<script>
import TradeHistory from '@/components/TradeHistory'

export default {
  title: 'History',
  components: {
    TradeHistory
  },
  data(){
    return{
      pastTrades: []
    }
  },
  mounted() {
    this.getTradeHistory()
  },
  methods:{
    getTradeHistory(){
      fetch("https://cors-anywhere.herokuapp.com/https://protected-earth-84113.herokuapp.com/trade/")
        .then(response => response.json())
        .then(response => {
          this.pastTrades = response
          console.log(response)
          // console.log(this.pastTrades[0].your_trade)
        })
        // .then(response => {
        //   for (let i = 0; i < response.length; i++) {
        //     console.log(i)
        //     const curIndex = i
        //     const listItem = document.createElement('li')
        //     // const yourDiv = document.createElement('div').setAttribute('class', `yours${curIndex}`)
        //     // const yourDiv = document.createElement('div').setAttribute('class', `theirs${curIndex}`)
        //     listItem.innerText = response[i].date
        //     for (let j = 0; j < response[i].your_trade.length; j++) {
        //       const p = document.createElement('p')
        //       p.innerText = response[i].your_trade[j].title
        //       listItem.appendChild(p)
        //     }
        //     const appendLi = document.querySelector('.tradeList').appendChild(listItem)

        //   }
        // })
    }
  }
}

</script>

<style scoped>

</style>
