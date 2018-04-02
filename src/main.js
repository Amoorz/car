import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'

import './scss/reset.css'

import {backdrop, loading, toast} from './components/component'
Vue.use(Vuex)
Vue.use(backdrop)
Vue.use(loading)
Vue.use(toast)

import mdBtn from "@/components/mdbtn/md-btn"
import mswitch from '@/components/mswitch/mswitch'
import gallery from '@/components/gallery/gallery'
Vue.component('md-btn', mdBtn)
Vue.component('mswitch', mswitch)
Vue.component('gallery', gallery)

import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerPlugin, {
    AlloyFinger
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '9b88773f7bf4ec6a873c480d44024384',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geolocation', 'Geocoder'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
