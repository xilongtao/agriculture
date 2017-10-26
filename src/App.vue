

<template>
  <div id="app">
      <router-view />
      
  </div>
</template>

<script>


export default {
  name: 'app',
  data: function () {
    return {
      good: 'hello world',
      transitionName: 'slide-left'
    }
  }
  /*
  watch: {
    "$route": function (to, from) {

        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if(isBack) {
            this.transitionName = 'slide-right'
        } else {
            this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
    }
　}
  */
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
