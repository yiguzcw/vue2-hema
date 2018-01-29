<template>
  <div class="scroll-x">
      <div class="title">
          <span class="left">盒我抢</span>
          <span class="right">更多></span>
      </div>
      <div class="content">
          <ul>
              <li>1234</li>
              <li>1243</li>
              <li>234</li>
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
    height: 200px;
    margin-top: 200px;
    outline: 1px solid red;
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
    display: none;
}
li {
    width: 50px;
    height: 50px;
    outline: 1px solid black;
}
</style>
