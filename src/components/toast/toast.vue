<template>
  <div class="toast" v-if="visible">{{msg}}</div>
</template>
<script>
export default {
  data () {
    return {
      visible: false,
      msg: ''
    }
  }
}
</script>
<style lang="scss">
@import '../../scss/base.scss';
.toast{
  position: fixed;
  bottom: 260rem/$font;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 0);
  min-width: 400rem/$font;
  height: 80rem/$font;
  border-radius: 12rem/$font;
  background: #333;
  @include font(44px);
  color: #fff;
  @include location(0, 0);
}
</style>
