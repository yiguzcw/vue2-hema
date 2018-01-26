<template>
  <div class="home">
      <mt-search class="search" cancel-text="取消" placeholder="搜索"></mt-search>
      <hm-swipper></hm-swipper>
  </div>
</template>

<script>
import Swipper from '@/components/common/swipper'

export default {
    components: {
        'hm-swipper': Swipper
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
