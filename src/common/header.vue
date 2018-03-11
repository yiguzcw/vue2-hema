<template>
  <div class="header">
      <input class="search" type="text"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search {
  width: 70%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #000;
  outline: none;
}
input{background: #999}
</style>
