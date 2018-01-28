<template>
  <div class="home-sort">
      <ul>
          <li>
              <img src="../../assets/images/coffee.png" alt="">
              <p>休闲零食</p>
          </li>
          <li>
              <img src="../../assets/images/wine.png" alt="">
              <p>中外名酒</p>
          </li>
          <li>
              <img src="../../assets/images/water.png" alt="">
              <p>饮料/水</p>
          </li>
          <li>
              <img src="../../assets/images/milk.png" alt="">
              <p>乳品冲饮</p>
          </li>
          <li>
              <img src="../../assets/images/oil.png" alt="">
              <p>粮油副食</p>
          </li>
          <li>
              <img src="../../assets/images/shampoo.png" alt="">
              <p>美妆个护</p>
          </li>
          <li>
              <img src="../../assets/images/bottle.png" alt="">
              <p>母婴保健</p>
          </li>
          <li>
              <img src="../../assets/images/cleaner.png" alt="">
              <p>厨卫清洁</p>
          </li>
          <li>
              <img src="../../assets/images/bottle.png" alt="">
              <p>日用百货</p>
          </li>
          <li>
              <img src="../../assets/images/coffee.png" alt="">
              <p>礼品卡券</p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            sorts: []
        }
    },
    created: function() {
        
    }
}
</script>

<style scoped>
.home-sort {
    width: 100%;
}
ul {
    margin: 0;
    padding: 0;
}
img {
    width: 55px;
    height: 55px;
}
li {
    width: 20%;
    float: left;
    list-style: none;
}
p {
    margin-top: -5px;
    font-size: 14px;
}
</style>
