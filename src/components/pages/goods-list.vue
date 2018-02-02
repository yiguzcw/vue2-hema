<template>
  <div class="goods-list">

    <div class="header">
      <mt-header title="我是分类名">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <div class="cell">
      <div class="image left">
        <img src="../../assets/images/avatar.jpg" alt="">
      </div>
      <div class="content left">
        <P class="title">我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字</P>
        <a class="price"><span class="red">￥999.00</span>/袋</a>
      </div>
      <div class="add left">
        <div class="circle">+</div>
      </div>
    </div>

    <div class="cell">
      <div class="image left">
        <img src="../../assets/images/avatar.jpg" alt="">
      </div>
      <div class="content left">
        <P class="title">我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字我是测试文字</P>
        <a class="price"><span class="red">￥999.00</span>/袋</a>
      </div>
      <div class="add left">
        <div class="circle">+</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
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
