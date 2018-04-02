<template>
  <div class="index">
    <div class="header" ref="header" v-show="true">
      <div class="btn-menu iFont" ref="bar" @click="showMenu"><md-btn>&#xe61e;</md-btn></div>
      <div class="header__title" v-show="!large">车亲你</div>
      <div class="header__search" v-show="large" :class="{'large': change == true}">
        <input type="text" >
      </div>
      <div class="btn-search iFont" @click="toSearch">{{large == false? '&#xe661;' : '取消'}}</div>
    </div>
    <div class="sidebar" :class="{'menu-show': show}">
      <div class="sidebar__head">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4187310170,1842782823&fm=27&gp=0.jpg">
        <p>自由的空气</p>
      </div>
      <div class="sidebar__content">
        <ul>
          <li @click="toSet"><md-btn>消息</md-btn></li>
          <li @click="toSet"><md-btn>管理</md-btn></li>
          <li @click="toSet"><md-btn>我的</md-btn></li>
          <li @click="toSet"><md-btn>设置</md-btn></li>
        </ul>
      </div>
    </div> 
    <div class="down" ref="down">
      {{msg}}
      <pull-load ref="down" v-show="load"></pull-load>
    </div>
    <div class="box" ref="box">
      <div class="scroller" ref="scroller">
        <ul>
          <li class="item" v-for="(v, i) in newList" :key="i">
            <p class="item__title">{{v.title}}</p>
            <ul class="item__case clearfix">
              <li v-for="(j, k) in v.image" :key="k"><img :src="j"></li>
            </ul>
            <div class="item__time clearfix">
              <p>刚刚</p>
            </div>
          </li>
        </ul>
      </div>
    </div>  
  </div>
</template>
<script>
import {mapState} from 'vuex'
import AlloyTouch from 'alloytouch'
import pullLoad from './pullLoad/load'
import news from './info'
export default {
  data () {
    return {  
      show: false,
      msg: '下拉加载',
      load: false,
      newList: [],
      allNews: news,
      now: 4,
      maxPage: 19,
      sw: false,
      large: false,
      change: false,
    }
  },
  watch: {
    drop (v) {
      // console.log(v)
      if (v == true) {
        this.show = false
        this.$backdrop(1)
      }
    },
    large (v) {
      if (v == false) {
        this.change = false
      } else {
        setTimeout(() => {
          this.change = true
        }, 10)
      }
    }
  },
  computed: {
    ...mapState(['drop'])
  },
  methods: {
    showMenu () { 
      this.show = true
      this.$backdrop(0)
    },
    toSet () {
      setTimeout(() => {
        this.$backdrop(1)
        this.$router.push('/setting')
      }, 500)
    },
    toSearch () {
      this.large = !this.large
    },
    refresh (at) {
      setTimeout(() => {
        if (this.$refs.scroller.translateY >= 0) {
          this.msg = '加载成功'
          this.load = false
          at.to(at.initialValue)
        }
      }, 1000)
    },
    getMore (at) {
      let footer = document.getElementsByClassName('footer')[0]
      this.sw = true
      var target
      let now = JSON.parse(JSON.stringify(this.now))
      now++
      if (this.now < this.maxPage) {
        this.now += 5
        this.$toast('努力加载中......')
        setTimeout(()=> {
          for (var i=now; i<this.now; i++) {
            this.newList.push(this.allNews[i])
          }
        }, 1000)
          
        setTimeout(() => {
          target = this.$refs.scroller.offsetHeight
          at.min = window.innerHeight - target - footer.offsetHeight
          this.sw = false
        }, 1100)
      } else {
        this.$toast('没有更多')  
      }
    },
    init () {
      var target = this.$refs.scroller,
          down = this.$refs.down,
          box = this.$refs.box,
          footer = document.getElementsByClassName('footer')[0]

      Transform(target, true)
      Transform(down);

      // header.originY = -50;
      // header.translateY = -50;
      var that = this
      var touch = new AlloyTouch({
        touch: ".scroller",//反馈触摸的dom
        vertical: true,//不必需，默认是true代表监听竖直方向touch
        target: target, //运动的对象
        property: "translateY",  //被运动的属性
        min: window.innerHeight - target.offsetHeight - footer.offsetHeight, //不必需,运动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
        factor: 1,//不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
        moveFactor: 1,//不必需,表示touchmove位移与被运动属性映射关系，默认值是1
        // step: 10,//用于校正到step的整数倍
        bindSelf: false,
        maxSpeed: 2, //不必需，触摸反馈的最大速度限制 
        initialValue: 0,
        change:function(v){ 
          // 下拉>0, 上拉<0
          
          // console.log(v)
          
          down.translateY = v
          
          // target.translateY = v
          // if (v < 55) {
          //   down.translateY = v
          // }

          // 拖到底部触发
          // let now = JSON.parse(JSON.stringify(that.now))
          if (v < window.innerHeight - target.offsetHeight) {
            if (that.sw == false) {
              that.getMore(this)  
            }
          }

        }, 
        touchStart:function(evt, v){
          
        },
        touchMove:function(evt, v){
          
        },  
        touchEnd:function(evt,v){
          if (v > 70) {
            this.to(60);
            that.msg = ''
            that.load = true
            that.refresh(this)
            return false;
          }
        },
        tap:function(evt, v){  },
        pressMove:function(evt, v){  },
        animationEnd:function(v){  //运动结束 
          if (v < 60 && that.load == false) {
            that.msg = '下拉加载'
          }
        }    
      })
    }
  },
  mounted () {
    this.$loading(0)
    setTimeout(() => {
      for (var i=0; i<this.now; i++) {
        this.newList.push(this.allNews[i])
      }
      this.$loading(1)
    }, 1500)

    setTimeout(() => {
      this.init()
    }, 1510)


    
  },
  components: {
    pullLoad
  }
}
</script>
<style lang="scss">
@import "../../scss/base.scss";
@import './index.scss';
</style>
