<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__content__left">
        <span class="nav__content__left__login">登录</span>
        <span>注册有礼</span>
      </div>
      <div class="nav__content__right">
        <ul>
          <li>我的订单</li>
          <li>购物车</li>
          <li>企业采购</li>
          <li>个人中心</li>
          <li>网站导航</li>
          <li>手机超市</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Nav extends Vue {

}

</script>

<style scoped lang="scss">
  @import "../../scss/common/variables";
  @import "nav";
</style>
