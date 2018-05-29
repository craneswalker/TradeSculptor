import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Search from '@/components/Search'
import Yours from '@/components/Yours'
import Theirs from '@/components/Theirs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/yours',
      name: 'Yours',
      component: Yours
    },
    {
      path: '/theirs',
      name: 'Theirs',
      component: Theirs
    }
  ]
})
