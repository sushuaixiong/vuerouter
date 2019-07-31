import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error from '@/components/Error'
import Vuex from '@/components/vuexInstance'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      },
      alias: '/home1'
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {
          path: '/',
          name: 'Hi'
        },
        {
          path: 'Hi1/:username',
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'Hi2',
          name: 'Hi2',
          component: Hi2,
          beforeEnter: (to, from, next) => {
            console.log(to)
            console.log(from)
            next()
          }
        }
      ]
    },
    {
      path: '/gohome/:username',
      name: 'gohome',
      redirect: '/Hi/Hi1/:username'
    },
    {
      path: '/vuex',
      component: Vuex
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
