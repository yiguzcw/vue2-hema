<template>
  <div class="goods-list">

    <div class="header">
      <mt-header :title="$route.params.sort">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="cell" v-for="(good, index) in goods" :key="index">
      <div class="image left">
        <img v-bind:src="good.image" alt="">
      </div>
      <div class="content left">
        <P class="title">{{good.name}}</P>
        <a class="price"><span class="red">￥{{good.price}}</span>/{{good.unit}}</a>
      </div>
      <div class="add left">
        <div class="circle">+</div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
import shop from '../../store/index'

export default {
  data() {
    return {
      goods: []
    }
  },
  created: function() {
    const id = this.$route.params.id;
    axios.get('https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/getGoods')
    .then(response => this.goods = response.data.data[id])
    .catch(error => console.log(error))
    console.log(shop)
  }
};
</script>

<style scoped>
.cell {
  width: 100%;
  height: 90px;
  margin-top: 10px;
  position: relative;
}
.image {
  width: 25%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  width: 65%;
  height: 100%;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.content p {
  margin-top: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.add {
  width: 10%;
  height: 25%;
}
.left {
  float: left;
}
.circle {
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 50%;
  font-size: 20px;
  background-color: #23a3ff;
  color: #ffffff;
}
.price {
  font-size: 16px;
  color: #999999;
}
.red {
  color: red;
  font-size: 18px;
}
</style>
