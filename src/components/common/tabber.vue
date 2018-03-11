<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="首页">
          <!-- <mt-cell v-for="n in 10" :key="n" :title="'首页 ' + n" /> -->
          <hm-home></hm-home>
        </mt-tab-container-item>
        <mt-tab-container-item id="分类">
          <!-- <mt-cell v-for="n in 5" :key="n" :title="'分类 ' + n" /> -->
          <hm-sort></hm-sort>
        </mt-tab-container-item>
        <mt-tab-container-item id="购物车">
          <!-- <mt-cell v-for="n in 7" :key="n" :title="'购物车 ' + n" /> -->
          <hm-cart></hm-cart>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
            <!-- <mt-cell v-for="n in 12" :key="n" :title="'我的 ' + n" /> -->
            <hm-mine></hm-mine>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../../assets/icons/hema-sel.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="分类">
        <img slot="icon" src="../../assets/icons/sort-sel.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="购物车">
        <img slot="icon" src="../../assets/icons/shopping-sel.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../assets/icons/mine-sel.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Home from '@/components/pages/home'
import Sort from '@/components/pages/sort'
import Mine from '@/components/pages/mine'
import Cart from '@/components/pages/cart'

export default {
  name: 'page-tabbar',
  data() {
    return {
      selected: '首页'
    };
  },
  components: {
    'hm-home': Home,
    'hm-sort': Sort,
    'hm-mine': Mine,
    'hm-cart': Cart
  }
};
</script>

<style scoped>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  img {
    filter: grayscale(100%);
    filter: gray;
  }
  .is-selected img {
      filter: none;
  }
</style>