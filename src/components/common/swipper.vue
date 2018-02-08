<template>
  <div class="swipper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(image, index) in images" :key="index">
        <img v-bind:src="image" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            images: []
        }
    },
    created: function() {
        axios.get('https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/github-scroll')
        .then(response => {
            this.images = response.data.data.url
        })
        .catch(error => {
            console.log('error')
        })
    }
}
</script>

<style>
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.mint-swipe-item {
    line-height: 200px;
}
.mint-swipe-item img {
    width: 100%;
    height: 100%;
}
</style>
