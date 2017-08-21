import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import MyRecommend from '@/components/MyRecommend/MyRecommend'
import MySinger from '@/components/MySinger/MySinger'
import MyRank from '@/components/MyRank/MyRank'
import MySearch from '@/components/MySearch/MySearch'
import MyUser from '@/components/MyUser/MyUser'
import MyLogin from '@/components/MyLogin/MyLogin'
import MyIndex from '@/components/MyIndex/MyIndex'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: MyLogin
    },
    {
      path: '/index',
      name: 'index',
      component: MyIndex,
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: MyRecommend
        },
        {
          path: 'singer',
          name: 'singer',
          component: MySinger
        },
        {
          path: 'rank',
          name: 'rank',
          component: MyRank
        },
        {
          path: 'search',
          name: 'search',
          component: MySearch
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: MyUser
    },
  ]
})
