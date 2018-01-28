<template>
  <div class="home">
      <mt-search class="search" cancel-text="取消" placeholder="搜索"></mt-search>
      <hm-swipper></hm-swipper>
      <home-sort></home-sort>
  </div>
</template>

<script>
import Swipper from '@/components/common/swipper'
import HomeSort from '@/components/common/home-sort'

export default {
    components: {
        'hm-swipper': Swipper,
        'home-sort': HomeSort
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
