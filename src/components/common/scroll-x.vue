<template>
  <div class="scroll-x">
      <div class="title">
          <span class="left">盒我抢</span>
          <span class="right">更多></span>
      </div>
      <div class="content">
          <ul>
              <li v-for="(good, index) in scrollGoods" :key="index">
                  <img v-bind:src="good.image" alt="">
                  <p>{{good.name}}</p>
                  <div class="goodsDesc">
                      <a>￥{{good.price}}<span>/{{good.unit}}</span></a>
                      <mt-button class="add" @click="addToCart(good)">+</mt-button>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            scrollGoods: []
        }
    },
    mounted: function() {
        axios.get('https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/getIndexScrollX')
        .then(response => this.scrollGoods = response.data.data.goods)
        .catch(error => console.log(error))
    },
    methods: {
        ...mapActions([
            'addToCart'
        ])
    }
}
</script>

<style scoped>
.scroll-x {
    width: 100%;
    height: 320px;
    margin-top: 200px;
    border-top: 1px solid #23a3ff;
    overflow-x: scroll;
    margin-left: -1px;
}
.title {
    width: 100%;
    height: 24px;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #999;
}
.left {
    float: left;
}
.right {
    float: right;
    font-size: 14px;
    font-weight: normal;
    margin-right: 14px;
}
.content {
    width: 100%;
    overflow-x: scroll;
}
ul {
    margin: 0;
    padding: 0;
    width: 980px;
    height: 280px;
}
li {
    list-style: none;
    width: 130px;
    height: 100%;
    margin-right: 10px;
    float: left;
    outline: 1px solid #999;
}
li img {
    width: 100%;
}
p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
}
.add {
    display: inline-block;
    padding: 0 8px;
    border-radius: 50%;
    background-color: #23a3ff;
    color: #ffffff;
}
</style>
