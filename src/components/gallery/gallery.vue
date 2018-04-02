<template>
  <div class="gallery" ref="seer" v-if="show">
    <div class="pop"ref="boss">
      <div class="pop__content" v-for="(v, i) in urlList" ref="bigBox">
        <div class="pop__content--preview">
          <img
            :src="v"
            v-finger:pinch="pinch"
            v-finger:multipoint-start="multipointStart"
            v-finger:press-move="pressMove.bind(this, 12)"
            v-finger:double-tap="doubleTap"
            v-finger:swipe="swipe"
            v-finger:multipoint-end="multipointEnd"
            v-finger:touch-start="touchStart"
            v-finger:touch-move="touchMove"
            v-finger:touch-end="touchEnd"
            @touchstart="getIndex(i)"
            ref="box"
            >
        </div>
        <div class="pop__content--cover" @click ="closeBox"></div>
        <!-- <div class="pop__content--cover"></div> -->
      </div>
    </div>
    <div class="gallery__progess">
      <ul>
        <li class="iFont" :class="{active: pointer == i}" v-for="(v, i) in urlList">&#xe62f;</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default{
  data () {
    return {
      // urlList: ['http://oss.k12china.com/201709/dd6e9bde86543268f6038d414ab965b4.png', 'http://oss.k12china.com/201711/de72d5e69722e332d75909ff5a01524e.jpg', 'http://oss.k12china.com/201710/498f864f43313e04685a546466545ff2.jpg'],
      // url: 'http://oss.k12china.com/201709/51882dc733e91552bb6bf1923d7a9d7f.jpg',
      urlList: [],
      show: false,         // 预览框状态
      initScale: 1,        // 缩放倍数
      moving: false,       // 滑动状态
      pointStartX: 0,      // x轴起始位置  
      pointEndX: 0,        // x轴结束位置
      pointStartY: 0,      // y轴起始位置
      pointEndY: 0,        // y轴结束位置
      pointer: 0,          // 指针
      shiftX: 0,           // x轴可滑动距离
      shiftY: 0,           // y轴可滑动距离
      touches: 0,          // 触点数量
      index: 0,            // 图片序号 
    }
  },
  methods: {
    // ...mapMutations({
    //   savePicNum: 'dynamic/SAVEPICTURENUM'
    // }),
    getIndex (i) {
      this.index = i
    },
    touchStart (e) {

      this.pointStartX = e.changedTouches[0].pageX
      this.pointStartY = e.changedTouches[0].pageY
      this.touches = e.touches.length

    },
    touchMove (e) {
      this.touches = e.touches.length
    },
    touchEnd (e) {

      this.pointEndX = e.changedTouches[0].pageX
      this.pointEndY = e.changedTouches[0].pageY
    },
    // 触摸屏幕
    multipointStart (e) {

      To.stopAll()
      let el = this.$refs.box[this.index]
      this.initScale = el.scaleX

    },
    // 离开屏幕
    multipointEnd (e) {
      let el = this.$refs.box[this.index]
      let w = el.offsetWidth
      let h = el.offsetHeight

      // 触壁弹回
      if (this.moving) {
        let init = el.scaleX
        let transX = Math.abs(el.translateX)
        let transY = Math.abs(el.translateY)

        // 可偏移距离
        let shiftX = (w / 2) * init - (window.innerWidth / 2)
        let shiftY = (h / 2) * init - (window.innerHeight / 2)
        this.shiftX = shiftX
        this.shiftY = shiftY

        // 真实偏移距离
        let distanceX = this.pointStartX - this.pointEndX
        let distanceY = this.pointStartY - this.pointEndY


        if (w * init > window.innerWidth) {
          // x轴   left > 0 ; right < 0
          if (distanceX < 0) {

            if (transX >= shiftX ) {
              new To(el, "translateX", shiftX, 500, this.ease, this.onEnd) 
              this.moving = false
            }
          
          } else {

            if (transX >= shiftX ) {
              new To(el, "translateX", -shiftX, 500, this.ease, this.onEnd) 
              this.moving = false
            }

          }

        }

        if (h * init > window.innerHeight) {
          // y轴   
          if (distanceY < 0) {

            if (transY >= shiftY) {
              new To(el, "translateY", shiftY, 500, this.ease, this.onEnd)
              this.moving = false
            }

          } else {

            if (transY >= shiftY ) {
              new To(el, "translateY", -shiftY, 500, this.ease, this.onEnd) 
              this.moving = false
            }

          }

        } 
        // console.log('弹回--->>', distanceY, transY, shiftY)
      }

      // 缩放背书 < 1   自动变回原样
      if (el.scaleX < 1) {
        new To(el, "scaleX", 1, 500, this.ease, this.onEnd);
        new To(el, "scaleY", 1, 500, this.ease, this.onEnd);
        new To(el, "translateX", 0, 500, this.ease, this.onEnd);
        new To(el, "translateY", 0, 500, this.ease, this.onEnd);
        this.initScale = 1
      }
    },
    // 轮播
    swipe (e) {
      let winW = window.innerWidth
      let boss = this.$refs.boss

      if (this.touches > 1) {
        return
      }

      let el = this.$refs.box[this.index]
      let transX = Math.abs(el.translateX)
      let range = this.shiftX + 150

      let change = () => {
        new To(el, "scaleX", 1, 500, this.ease, this.onEnd);
        new To(el, "scaleY", 1, 500, this.ease, this.onEnd);
        new To(el, "translateX", 0, 500, this.ease, this.onEnd);
        new To(el, "translateY", 0, 500, this.ease, this.onEnd);
        this.initScale = 1
      }
      // console.log('swipe--->>', e.direction, transX, range)
      if (this.initScale != 1) {
        if (e.direction == "Left") {
          
          if (transX >= range) {
            if (this.pointer < this.urlList.length - 1) {
              this.pointer++
            }
            // console.log("left 满足", transX, range)
            new To(boss, "translateX", -(winW * this.pointer), 500, this.ease, this.onEnd)
            change()
          }

        } else {

          if (transX >= range) {
            if (this.pointer > 0) {
              this.pointer--
            }
            // console.log('right 满足', transX, range)
            new To(boss, "translateX", -(winW * this.pointer), 500, this.ease, this.onEnd)
            change()
          }

        }
      } else {

        if (e.direction == "Left") {

          if (this.pointer < this.urlList.length - 1) {
            this.pointer++
            
            new To(boss, "translateX", -(winW * this.pointer), 500, this.ease, this.onEnd)
          }

        } else {

          if (this.pointer > 0) {
            this.pointer--
            // console.log(this.pointer)
            new To(boss, "translateX", -(winW * this.pointer), 500, this.ease, this.onEnd)
          }
          
        }

      }

      // this.url = this.urlList[this.pointer]

      // console.log(e.direction, this.pointer)
    },
    // 拖拽
    pressMove (num, e) {
      // return
      e.preventDefault()
      let el = this.$refs.box[this.index]
      this.initScale = el.scaleX
      let w = el.offsetWidth * this.initScale
      let h = el.offsetHeight * this.initScale

      // 宽或高需要超过屏幕大小才能滑动
      if (this.initScale != 1) {
        if (w > window.innerWidth) {
          el.translateX += e.deltaX
          this.moving = true
        }
        if (h > window.innerHeight) {
          el.translateY += e.deltaY
          this.moving = true
        }
      }

    },
    // 双击
    doubleTap (e) {
      // return
      To.stopAll()
      let el = this.$refs.box[this.index]
      let w = el.offsetWidth
      let h = el.offsetHeight
      let topPx = window.innerHeight / 2 - (h*window.innerWidth / w) / 2;

      // function ease (x) {
      //   return Math.sqrt(1 - Math.pow(x - 1, 2));
      // }

      if (el.scaleX > 1) {
        new To(el, "scaleX", 1, 500, this.ease, this.onEnd);
        new To(el, "scaleY", 1, 500, this.ease, this.onEnd);
        new To(el, "translateX", 0, 500, this.ease, this.onEnd);
        new To(el, "translateY", 0, 500, this.ease, this.onEnd);
      } else {
        var box = el.getBoundingClientRect();
        // 中心点位置
        // var y = box.height - (( e.changedTouches[0].pageY - topPx) * 2) - (box.height / 2 - ( e.changedTouches[0].pageY - topPx));
        // var x = box.width - (( e.changedTouches[0].pageX) * 2) - (box.width / 2 - ( e.changedTouches[0].pageX));
        new To(el, "scaleX", 2, 500, this.ease, this.onEnd);
        new To(el, "scaleY", 2, 500, this.ease, this.onEnd);
        new To(el, "translateX", 0, 500, this.ease, this.onEnd);
        new To(el, "translateY", 0, 500, this.ease, this.onEnd);
      }

      setTimeout(() => {
        this.initScale = el.scaleX
      }, 600)

      this.moving = true
    },
    // 缩放
    pinch (e) {
      let el = this.$refs.box[this.index]
      el.scaleX = el.scaleY = this.initScale * e.zoom
    },
    // 展示
    showBox (url, i) {
      this.show = true
      this.urlList = url
      this.pointer = i

      /************************/ 
      this.$nextTick(function () {

        let el = this.$refs.box
        for (let i=0; i<el.length; i++) {
          Transform(el[i])
        }
        
        let seer = this.$refs.seer
        let bigBox = this.$refs.bigBox
        for (let i=0; i<bigBox.length; i++) {
          bigBox[i].style.width = window.innerWidth + 'px'
        }

        let boss = this.$refs.boss 
        boss.style.width = window.innerWidth * this.urlList.length + 'px'
        boss.style.height = seer.offsetHeight + 'px'
        Transform(boss)
        
        new To(boss, "translateX", - window.innerWidth * i, 0, this.ease, this.onEnd);
      })
      /************************/

      // let boss = this.$refs.boss 
      // new To(boss, "translateX", - window.innerWidth * i, 0, this.ease, this.onEnd);
    },
    // 关闭
    closeBox () {

      this.show = false
      let el = this.$refs.box

      // let reset = (index) => {
      //   new To(el[index], "scaleX", 1, 0, this.ease, this.onEnd);
      //   new To(el[index], "scaleY", 1, 0, this.ease, this.onEnd);
      //   new To(el[index], "translateX", 0, 0, this.ease, this.onEnd);
      //   new To(el[index], "translateY", 0, 0, this.ease, this.onEnd);
      // }
      
      // for (let i=0; i<el.length; i++) {
      //   reset(i)
      // }

      this.initScale = 1
      this.moving = false
    },
    // 动画函数
    ease (x) {
      return Math.sqrt(1 - Math.pow(x - 1, 2));
    },
    onEnd () {
      // this.savePicNum({picNum: this.pointer})
    }
  },
  mounted () {
    // let el = this.$refs.box
    // for (let i=0; i<el.length; i++) {
    //   Transform(el[i])
    // }
    
    // let bigBox = this.$refs.bigBox
    // for (let i=0; i<bigBox.length; i++) {
    //   bigBox[i].style.width = window.innerWidth + 'px'
    // }

    // let boss = this.$refs.boss 
    // boss.style.width = window.innerWidth * this.urlList.length + 'px'
    // Transform(boss)
  }
}
</script>
<style lang="scss">
@import '../../scss/base.scss';
@import './gallery.scss';
</style>