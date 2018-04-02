<template>
  <div class="museum">
    <div class="museum__header">
      
    </div>
    <div class="main">
      <div style="width: 400%;" class="scroller" id="carousel-scroller">
        <div style="width: 25%;">
          
        </div>
        <div style="width: 25%;"></div>
        <div style="width: 25%;"></div>
        <div style="width: 25%;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import AlloyTouch from 'alloytouch'
export default {
  data () {
    return {

    }
  },
  mounted () {
    var scroller = document.getElementsByClassName("scroller")[0]
    Transform(scroller)
    new AlloyTouch({
    touch: ".main",//反馈触摸的dom
    vertical: false,//不必需，默认是true代表监听竖直方向touch
    target: scroller, //运动的对象
    property: "translateX",  //被运动的属性
    min: window.innerWidth * -3, //不必需,运动属性的最小值
    max: 0, //不必需,滚动属性的最大值
    step: window.innerWidth,
    spring: false, //不必需,是否有回弹效果。默认是true
    inertia: false, //不必需,是否有惯性。默认是true
    touchEnd: function (evt, v, index) {
        var step_v = index * this.step * -1;
        var dx = v - step_v;
        if (v < this.min) {
            this.to(this.min);
        } else if (v > this.max) {
            this.to(this.max);
        } else if (Math.abs(dx) < 30) {
            this.to(step_v);
        }
        else if (dx > 0) {
            this.to(step_v + this.step);
        } else {
            this.to(step_v - this.step);
        }
        return false;
    },
    animationEnd: function (evt , v) {
        // var i = 0,
        //     len = items.length;
        // for (; i < len; i++) {
        //     if (i === this.currentPage) {
        //         items[i].classList.add("active");
        //     } else {
        //         items[i].classList.remove("active");
        //     }
        // }
      }
    })
  },
}
</script>
<style lang="scss">
// @import "./museum.scss";
.museum {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.main{
  width: 100%;
  height: 100%;
}
.scroller{
  position: relative;
  height: 100%;
  &>div{
    float: left;
    height: 100%;
    &:nth-of-type(1){
      background: pink;
      height: 2000px; 
      overflow-y: auto;
    }
    &:nth-of-type(2){
      background: skyblue;
    }
    &:nth-of-type(3){
      background: slategrey;
    }
    &:nth-of-type(4){
      background: yellowgreen;
    }
  }
}
</style>
