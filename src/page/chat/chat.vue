<template>
	<div class="index">
		<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
			<swiper-slide><div class="item">111</div></swiper-slide>
			<swiper-slide><div class="item">222</div></swiper-slide>
			<swiper-slide><div class="item">333</div></swiper-slide>
	  </swiper>
	</div>
</template>
<script>
import AlloyTouch from 'alloytouch'
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
	data () {
		return {
			show: false,
			active: false,
			swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          // notNextTick: false,
          // // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          // // direction : 'vertical',
          // effect:"coverflow",
          // grabCursor : false,
          // setWrapperSize :false,
          // autoHeight: true,
          // paginationType:"bullets",
          // pagination : '.swiper-pagination',
          // paginationClickable : false,
          // prevButton:'.swiper-button-prev',
          // nextButton:'.swiper-button-next',
          // scrollbar:'.swiper-scrollbar',
          // mousewheelControl : false,
          // observeParents:false,
      }
		}
	},
	computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
  	callback () {

  	},
  	open () {
  		this.$refs.back.show()
  	},
  },
	mounted () {

	},
	components: {
    swiper,
    swiperSlide,
  },
}
</script>
<style>
@import "./index.scss";
</style>