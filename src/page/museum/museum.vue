<template>
  <div class="museum">
    <div class="museum__header">
      <div class="museum__header--title">历史</div>
      <ul class="museum__header--nav clearfix">
        <li :class="{active: now == i}" 
          v-for="(v, i) in navList" :key="i"
          @click="setNow(i)"
        >{{v}}</li>
      </ul>  
    </div>
    <div class="museum__content" ref="content">
      <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="getPage()">
        <swiper-slide>
          <div class="case">
            <div class="">
              <ul>
                <li v-for="(v, i) in Capella" :key="i">
                  <p>{{v.title}}</p>
                  <p>{{v.content}}</p>
                  <img :src="v.pic" @click="viewer(0, i)">
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="case">
            <div>
              <ul>
                <li v-for="(v, i) in Accord" :key="i">
                  <p>{{v.title}}</p>
                  <p>{{v.content}}</p>
                  <img :src="v.pic" @click="viewer(1, i)">
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>  
        <swiper-slide>
          <div class="case">
            <div>
              <ul>
                <li v-for="(v, i) in Camry" :key="i">
                  <p>{{v.title}}</p>
                  <p>{{v.content}}</p>
                  <img :src="v.pic" @click="viewer(2, i)">
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>  
      </swiper>
    </div>
    <gallery ref="gallery" ></gallery>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import list from './info'
export default {
  data () {
    return {
      navList: ['马自达6', '雅阁', '凯美瑞'],
      now: 0,
      swiperOption: {},
      Capella: list.Capella,
      Accord: list.Accord,
      Camry: list.Camry,
      car: [list.Capella, list.Accord, list.Camry]
    }
  },
  watch: {
    
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    setNow (i) {
      this.now = i
      this.swiper.slideTo(i, 500, true)
    },
    getPage () {
      this.now = this.swiper.realIndex
    },
    viewer (v, i) {
      let image = []
      for (let i=0; i<this.car[v].length; i++) {
        image.push(this.car[v][i].pic)
      } 
      this.$refs.gallery.showBox(image, i)
    }
   },
  mounted () {
    // this.swiper.slideTo(1, 500, true)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
@import '../../scss/base.scss';
@import './museum';
</style>
