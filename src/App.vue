<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <hm-tabber></hm-tabber> -->
  </div>
</template>

<script>
import Tabber from '@/components/common/tabber'
export default {
  name: 'App',
  components: {
    'hm-tabber' :Tabber
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
