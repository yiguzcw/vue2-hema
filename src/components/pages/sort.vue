<template>
  <div class="sortList">
    <mt-header fixed title="分类">
        <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <div class="content">
        <ul>
            <li v-for="(sort, index) in sorts" :key="index"> 
                <router-link :to="{name:'goodsList',params:{sort:sort.text,id:index}}">
                    <img v-bind:src="sort.imageSrc" />
                    <p>{{sort.text}}</p>
                </router-link>
            </li>
        </ul>
    </div>
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
        axios.get('https://www.easy-mock.com/mock/5a223b51707056548f086d8b/hema/sortItems')
        .then(sorts => { this.sorts = sorts.data.data.sorts })
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>
ul {
    width: 80%;
    height: 600px;
    margin-top: 40px;
    list-style-type: none;
}
li {
    margin-top: 40px;
    margin-right: 6%;
    float: left;
    text-decoration: none;
}
li:nth-child(3n) {
    margin-right: 0;
}
img {
    width: 80px;
    height: 80px;
}
p {
    color: #000;
}
</style>
