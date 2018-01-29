<template>
  <div class="home">
      <mt-search class="search" cancel-text="取消" placeholder="搜索"></mt-search>
      <hm-swipper></hm-swipper>
      <home-sort></home-sort>
      <scroll-x></scroll-x>
  </div>
</template>

<script>
import Swipper from '@/components/common/swipper'
import HomeSort from '@/components/common/home-sort'
import ScrollX from '@/components/common/scroll-x'

export default {
    components: {
        'hm-swipper': Swipper,
        'home-sort': HomeSort,
        'scroll-x': ScrollX
    }
}
</script>

<style scoped>
.search {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
}
.swipper {
    margin-top: 55px;
}
</style>
