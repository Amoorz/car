import Vue from 'vue'
import Router from 'vue-router'
import map from '@/page/map/map'
import index from '@/page/index/index'
import museum from '@/page/museum/museum'
import setting from '@/page/setting/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/museum',
      name: 'museum',
      component: museum
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    }
  ]
})
