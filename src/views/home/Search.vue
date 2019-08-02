<template>
  <div class="search">
    <div class="search__content">
      <div class="search__logo">
        <img :src="Logo" alt="" />
      </div>
      <div class="search__input">
        <div class="search__input__content">
          <input type="text" />
        </div>
        <button type="button">搜索</button>
      </div>
      <div class="search__cart"></div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import * as IMAGES from '@/assets/images';

@Component({})

export default class Search extends Vue {
  private Logo: object = IMAGES.ICON_LOGO_BG
}

</script>

<style scoped lang="scss">
  @import "../../scss/common/variables";
  @import "../../scss/home/search";
</style>
