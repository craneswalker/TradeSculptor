<template>
  <div id="History">
    <ul class="tradeList">
    </ul>
  </div>
</template>

<script>
export default {
  title: 'History',
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
        // .then(response => {
        //   this.pastTrades = response
        //   // console.log(this.pastTrades[0].your_trade)
        // })
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            const listItem = document.createElement('li')
            listItem.innerText = response[i].date
            const appendLi = document.querySelector('.tradeList').appendChild(listItem)
            // const date = document.querySelectorAll('li').innerText = response[i].date
            console.log(response[i].date)
            console.log(response[i].your_trade)
          }
        })
    }
  }
}

</script>

<style scoped>

</style>
