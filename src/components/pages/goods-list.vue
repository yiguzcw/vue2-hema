<template>
  <div class="goods-list">
    <div class="cell">
      <div class="image left">
        <img src="../../assets/images/avatar.jpg" alt="">
      </div>
      <div class="content left"></div>
      <div class="add left">
        <div class="circle">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.cell {
  width: 100%;
  height: 90px;
  outline: 1px solid red;
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
</style>
