<template>
  <div class="scroll-x">
      <div class="title">
          <span class="left">盒我抢</span>
          <span class="right">更多></span>
      </div>
      <div class="content">
          <ul>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
              <li>
                  <img src="../../assets/images/avatar.jpg" alt="">
                  <div class="goodsDesc">
                      <p>￥79.00<span>/箱</span></p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.scroll-x {
    width: 100%;
    height: 260px;
    margin-top: 200px;
    outline: 1px solid red;
    overflow-x: scroll;
}
.title {
    width: 100%;
    height: 24px;
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    outline: 1px solid purple;
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
    width: 1000px;
    height: 500px;
}
li {
    list-style: none;
    width: 120px;
    height: 100%;
    margin-right: 10px;
    float: left;
    outline: 1px solid black;
}
li img {
    width: 100%;
}
</style>
