<template>
  <div id="app">
    <router-view/>
    <div class="footer" v-show="showFoot">
      <ul>
        <li @click="toNext(0)" :class="{active: index == 0}"><i class="iFont">&#xe621;</i>新闻</li>
        <li @click="toNext(1)" :class="{active: index == 1}"><i class="iFont">&#xe698;</i>博物馆</li>
        <li @click="toNext(2)" :class="{active: index == 2}"><i class="iFont">&#xe609;</i>地图</li>  
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      index: 0,
      showFoot: true,
      foot: ['museum', 'map', 'index']
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.foot.indexOf(to.name) != -1) {
        this.showFoot = true
      } else {
        this.showFoot = false
      }
    }
  },
  methods: {
    toNext (i) {
      this.index = i
      switch (i) {
        case 0:
          this.$router.push('/')
        break;
        case 1:
          this.$router.push('/museum')
        break;
        case 2:
          this.$router.push('map')
        break;
      }
    }
  },
  mounted () {
    switch (this.$route.name) {
      case 'index':
        this.index = 0
        this.showFoot = true
      break;
      case 'museum':
        this.index = 1
        this.showFoot = true
      break;
      case 'map':
        this.index = 2
        this.showFoot = true
      break;
      default: 
        this.showFoot = false
    }
  }
}
</script>
<style lang="scss">
@import './scss/base.scss';
#app {
  width: 100%;
  height: 100%;
}
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 4;
  border-top: 1px solid #e5e5e5;
  width: 100%;
  height: 140rem/$font;
  background: #f7f7fa;
  li{
    float: left;
    width: 33.33%;
    height: 140rem/$font;
    @include location(0, 0);
    @include font(46px);
    i{
      margin-right: 20rem/$font;
      @include font(50px);
    }
  }
  .active{
    color: #12B7F5;
  }
}
</style>
