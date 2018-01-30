<template>
    <div class="cartCell">
        <div class="cell">

            <div class="icon left">
                <img src="../../assets/icons/good-sel.png" alt="">
            </div>
            <div class="content left">
                <img src="../../assets/images/avatar.jpg" alt="">
                <p>超级</p>
                <p>￥9999</p>
            </div>
            <div class="num left">
                <ul>
                    <li>-</li>
                    <li>12</li>
                    <li>+</li>
                </ul>
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
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: auto;
    margin-left: -10px;
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
    outline: 1px solid red;
}
img {
    width: 100%;
    height: 100%;
}
.content {
    width: 70%;
    height: 100%;
    outline: 1px solid black;
}
.content > img {
    width: 45%;
    height: 100%;
    float: left;
}
.content > p {
    text-align: left;
}
.num {
    width: 20%;
    height: 100%;
    outline: 1px solid blue;
    position: relative;
}
.left {
    float: left;
}
</style>