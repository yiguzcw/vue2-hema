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
        <div class="info-detail">
            <ul>
                <li>
                    <span>0</span>
                    <p>优惠券</p>
                </li>
                <li>
                    <span>0.00</span>
                    <p>礼品卡</p>
                </li>
                <li>
                    <span>0</span>
                    <p>电子券</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="order">
        <span class="left">我的订单</span>
        <span class="right">查看更多订单 ></span>
        <ul>
            <li>
                <img src="../../assets/icons/wallet.png" alt="">
                <p>待付款</p>
            </li>
            <li>
                <img src="../../assets/icons/welfare.png" alt="">
                <p>待配送</p>
            </li>
            <li>
                <img src="../../assets/icons/delivery.png" alt="">
                <p>配送中</p>
            </li>
            <li>
                <img src="../../assets/icons/hand.png" alt="">
                <p>待评价</p>
            </li>
        </ul>
    </div>
    <div class="tools">
        <span class="left">常用工具</span>
        <ul>
            <li>
                <img src="../../assets/icons/welfare.png" alt="">
                <p>福利社</p>
            </li>
            <li>
                <img src="../../assets/icons/friends.png" alt="">
                <p>邀请有礼</p>
            </li>
            <li>
                <img src="../../assets/icons/credit.png" alt="">
                <p>银行卡活动</p>
            </li>
            <li>
                <img src="../../assets/icons/store.png" alt="">
                <p>门店</p>
            </li>
            <li>
                <img src="../../assets/icons/exchange.png" alt="">
                <p>优惠券</p>
            </li>
            <li>
                <img src="../../assets/icons/package.png" alt="">
                <p>我的评价</p>
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
* {
    box-sizing: border-box;
}
.info-card {
    width: 90%;
    margin: 50px auto;
    height: 100px;
    border: 1px solid #26a2ff;
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
    height: 90px;
    margin-top: -35px;
    padding: 5px;
    border: 1px solid #26a2ff;
}
.info-detail {
    clear: both;
}
.info-detail ul {
    list-style: none;
}
.info-detail li {
    float: left;
}
.info-detail li:nth-child(2) {
    margin: 0 50px;
}
.info-detail span {
    font-size: 18px;
}
.info-detail p {
    margin-top: 0;
}
.mint-cell-text {
    float: left;
}
.top {
    border-top: 1px solid #888;
}
.left {
    float: left;
    font-size: 16px;
    font-weight: bold;
}
.right {
    float: right;
    font-size: 14px;
    color: #888;
}
.order ul, .tools ul {
    margin: 0;
    padding: 0;
    margin-top: 25px;
    border-top: 1px solid #999;
    padding-top: 8px;
}
.order li, .tools li {
    list-style: none;
    float: left;
    margin-right: 30px;
    width: 18%;
}
.order li:nth-child(4), .tools li:nth-child(4) {
    margin-right: 0;
}
.order img, .tools img {
    width: 25px;
    height: 25px;
}
.order p, .tools p {
    margin-top: -3px;
    font-size: 12px;
}
.tools {
    padding: 5px;
    margin-top: 15px;
    width: 100%;
    height: 150px;;
    border: 1px solid #26a2ff;
}
</style>
