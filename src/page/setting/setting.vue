<template>
  <div class="setting">
    <div class="setting__header">
      <div class="setting__header--back iFont" @click="toBack">&#xe624;</div>
      <div class="setting__header--title">设置</div>
    </div>
    <div class="setting__content">
      <ul>
        <li>
          <p>是否开启消息推送</p>
          <mswitch class="btn-sw"></mswitch>
        </li>
        <li>
          <p>钱包密码</p>
          <mswitch class="btn-sw"></mswitch>
        </li>
        <li>
          <p>手机验证</p>
          <mswitch class="btn-sw"></mswitch>
        </li>
        <li>
          <p>是否允许多开</p>
          <mswitch class="btn-sw"></mswitch>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      }
  },
  methods: {
    toBack () {
      this.$router.push('/')
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
@import '../../scss/base.scss';
@import './setting.scss';
</style>
