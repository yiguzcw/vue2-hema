<template>
  <div class="mine">
    <mt-header fixed>
        <mt-button icon="back" slot="left"></mt-button>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="info-card">
        <div class="avater">
            <img src="../../assets/images/avatar.jpg" alt="">
            <a>TeanLee</a>
        </div>
    </div>
    <div class="order"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.info-card {
    width: 90%;
    margin: 50px auto;
    height: 100px;
    border: 1px solid red;
}
.avater img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
}
.avater {
    float: left;
    line-height: 50px;
    text-decoration: none;
    color: #26a2ff;
}
.order {
    width: 100%;
    height: 80px;
    outline: 1px solid blue;
}
</style>
