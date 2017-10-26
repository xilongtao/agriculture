

<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition >
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
  },
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
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

.child-view {
position: absolute;
width:100%;
transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
