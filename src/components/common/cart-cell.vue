<template>
    <div class="cartCell">
        <div class="cell">

            <div class="icon left">
                <img src="../../assets/icons/good-sel.png" alt="">
            </div>
            <div class="content left">
                <img src="../../assets/images/avatar.jpg" alt="">
                <p class="title">超级超级超级超级超级超级超级超级超级超级超级</p>
                <p class="price red">￥9999</p>
            </div>
            <div class="num left">
                <ul>
                    <li>-</li>
                    <li>12</li>
                    <li>+</li>
                </ul>
            </div>

        </div>

        <div class="cell">

            <div class="icon left">
                <img src="../../assets/icons/good-sel.png" alt="">
            </div>
            <div class="content left">
                <img src="../../assets/images/avatar.jpg" alt="">
                <p class="title">超级超级超级超级超级超级超级超级超级超级超级</p>
                <p class="price red">￥9999</p>
            </div>
            <div class="num left">
                <ul>
                    <li>-</li>
                    <li>12</li>
                    <li>+</li>
                </ul>
            </div>

        </div>

        <div class="CartCount">
            <div class="icon">
                <img src="../../assets/icons/good-sel.png" alt="">
            </div>
            <div class="content lh44">
                <span class="left">全选</span>
                <span class="right red">￥9999</span>
            </div>
            <div class="num">
                <mt-button type="primary">结算</mt-button>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.cartCell {
    width: 100%;
    height: 100%;
    padding: 2%;
}
.cell {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    margin-bottom: 15px;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    bottom: 0;
}
li {
    float: left;
    outline: 1px solid #888;
    padding: 6px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);  
    -webkit-tap-highlight-color: transparent; 
    max-width: 21px;
    overflow: hidden;
}
.icon {
    width: 8%;
}
img {
    width: 100%;
    height: 100%;
}
.content {
    width: 65%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content > p {
    font-size: 14px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content > img {
    width: 38%;
    height: 100%;
    float: left;
}
.num {
    width: 27%;
    height: 100%;
    position: relative;
}
.left {
    float: left;
}
.title {
    
}
.CartCount {
    position: fixed;
    margin-left: -15px;
    bottom: 52px;
    width: 100%;
    height: 44px;
    border-top: 1px solid #999;
    display: flex;
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
}
.lh44 {
    line-height: 44px;
    padding: 10px;
}
.red {
    color: #fe4544;
    font-size: 22px;
}
</style>