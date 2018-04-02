<template>
  <div class="loading" v-if="visible">
    <div class="loader">
      <div class="loader-inner ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>    
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
<style lang="scss">
@import "../../scss/base.scss";
.loader{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  // background-color: #fff;
  // opacity: 0.4;
  .ball-pulse{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    div{
      background-color: #03a9f4;
      width: 50rem/$font;
      height: 50rem/$font;
      border-radius: 100%;
      margin: 2rem/$font;
      animation-fill-mode: both;
      display: inline-block; 
      &:nth-of-type(1){
        -webkit-animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); 
        animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); 
      }
      &:nth-of-type(2){
        -webkit-animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); 
      }
      &:nth-of-type(3){
        -webkit-animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
        animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      }
    }
  }
}

@-webkit-keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; 
    }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; 
    }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; 
    } 
  }
@keyframes scale {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; 
    }
  45% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 0.7; 
    }
  80% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1; 
   } 
  }
</style>
